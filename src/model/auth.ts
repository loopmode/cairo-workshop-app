export interface AuthService {
  register: (username: string, password: string) => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  isAuthenticated: () => Promise<boolean>;
  on: (eventType: string, callback: () => void) => () => void;
}

type User = {
  username: string;
  password: string;
};

export enum AuthEvent { 
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT"
}

export class MockAuthService implements AuthService {
  backend: LocalForage;
  emitter: EventTarget;
  constructor(backend: LocalForage) {
    this.backend = backend;
    this.emitter = new EventTarget();
  }
  async getUsers(): Promise<User[]> {
    const users = await this.backend.getItem<User[]>("users");
    return users;
  }
  async getUser(username: string): Promise<User | undefined> {
    const users = await this.backend.getItem<User[]>("users");
    return users?.find(user => user.username === username);
  }

  async register(username: string, password: string) {
    const existingUser = await this.getUser(username);
    if (existingUser) {
      return false;
    }

    const users = await this.getUsers();
    await this.backend.setItem("users", [...(users || []), { username, password }]);
    return true;
  }

  async login(username: string, password: string) {
    const existingUser = await this.getUser(username);
    if (!existingUser) {
      return false;
    }
    if (existingUser.password === password) {
      await this.backend.setItem("authenticated", true);
      this.emitter.dispatchEvent(new Event(AuthEvent.LOGGED_IN));
      return true;
    }
    return false;
  }
  logout = async () => {
    await this.backend.setItem("authenticated", false);
    this.emitter.dispatchEvent(new Event(AuthEvent.LOGGED_OUT));
    return true;
  };
  async isAuthenticated() {
    return await this.backend.getItem<boolean>("authenticated");
  }

  on(eventType: string, callback: () => void) {
    const handler = () => callback();

    this.emitter.addEventListener(eventType, handler);

    return () => this.emitter.removeEventListener(eventType, handler);
  }
}

export interface AuthService {
  register: (username: string, password: string) => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  isAuthenticated: () => Promise<boolean>;
}

type User = {
  username: string;
  password: string;
};

export class MockAuthService implements AuthService {
  backend: LocalForage;
  constructor(backend: LocalForage) {
    this.backend = backend;
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
      return true;
    }
    return false;
  }
  async logout() {
    await this.backend.setItem("authenticated", false);
    return true;
  }
  async isAuthenticated() {
    return await this.backend.getItem<boolean>("authenticated");
  }
}

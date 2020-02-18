// We can use typeof to generate a type from an imported file, in this case a json object:
export type User = typeof import("../../../stubs/user.json");

// We can access the type of another type's "property" using bracket notation:
// export type Address = User['address'];

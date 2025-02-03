let userName: string;

userName = "Max";

let userAge: number;
userAge = 34;

let isValid = true;
let isInvalid: boolean = false;

// string, number, boolean
// union type:
let userID: string | number = "abc1";
userID = 123;

// userID = true;

// object  type

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};
// error: user = {};
// Long way:
// let hobbies: Array<string>;
// Short way:
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Reading"];

function add(a: number, b: number): number {
  const result = a + b;
  console.log(result);
  return result;
}
type AddFn = (a: number, b: number) => number; // can use function types

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);
// Why interface vs type?
// interface - limited to object types
// interface - can use implements
// type - more types, like function type
//
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "email@email.com",
};

// reason for using interfaces
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}
// declaration merging - can extend interface, add properties they need
// interface Credentials {
//     mode: string;
// }

function login(credentials: Credentials) {}

// login(new AuthCredentials());

// type Admin = {
//     permissions: string[]
// }

// type AppUser = {
//     userName: string;
// }

// // Merging types - combination of the 2 types
// type AppAdmin = Admin & AppUser;

// admin = {
//     permissions: ['login'],
//     userName: 'Max'
// }

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;
admin = {
  permissions: ["login"],
  userName: "Max",
};

// Literal Types
type Role = "admin" | "user" | "editor";
let role: Role;
role = "admin";
//role = 'abc';

function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

// Type guards and type narrowing:
function combine(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return `${a} ${b}`;
}
// All kinds of type guards can be added:
// Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, boolean, object, function, symbol or bigint type
// Use JavaScript's instanceof operator to check if an object value is based on some specific class
// Use JavaScript's in operator to check if an object contains a specific property

let roles: Array<Role>;
roles = ["admin", "editor"];

// Build own generic type:
// can also be T, U ( any letter )
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};
// Use a generic type
const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};
// generic function also
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}
// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 34 }
// );

// can also simplify:
const newUser = merge({ name: "Max" }, { age: 34 });

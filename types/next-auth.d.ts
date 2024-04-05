import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

// This will be the shape of your user object.
// You can extend this as you need.
interface User {
  name: string;
  email: string;
  image: string;
  password: string;
}

// Extend the Session interface with the User object
interface ExtendedSession extends Session {
  user: User;
}

// Extend the JWT interface with the User object
interface ExtendedJWT extends JWT {
  user: User;
}

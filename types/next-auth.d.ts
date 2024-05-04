import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    role: string;
  }

  interface User {
    id: string;
    role: string;
  }
}

// Extend the Session interface with the User object
interface ExtendedSession extends Session {
  user: User;
}

// Extend the JWT interface with the User object
interface ExtendedJWT extends JWT {
  user: User;
}

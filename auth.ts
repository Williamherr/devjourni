import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/schema/schema";
import { createPages } from "./lib/schema/pages";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      // Need Fixing
      // async authorize(credentials, req) {
      //   // Add logic here to look up the user from the credentials supplied

      //   const user = await sql`SELECT * FROM Users WHERE username = ${
      //     credentials.username
      //   } AND password = crypt(${credentials.password.toString()}, password`;

      //   console.log(user);
      //   if (user) {
      //     return user;
      //   } else {
      //     return null;
      //   }
      // },
    }),
    GitHub,
    GoogleProvider,
  ],
  events: {
    async createUser({ user }) {
      createPages(user.id ?? "", null, null);
    },
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});

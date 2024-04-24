import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/schema/schema";
import { createPages } from "./lib/schema/pages";
import Resend from "next-auth/providers/resend";

async function sendVerificationRequest({
  identifier: email,
  url,
}: {
  identifier: string;
  url: string;
}) {
  // Call the cloud Email provider API for sending emails
  console.debug("create nodemailerl");
  var nodemailer = require("nodemailer");
  console.debug("createTransport");
  console.debug("email: ", process.env.NODEMAILER_EMAIL);
  console.debug("password: ", process.env.NODEMAILER_PW);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  console.debug("mailoptions sending email");
  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Sign in to Your page",
    text: `Hello, Please use the following link to authenticate your account: ${url}`, // plain text body
    html: `<b>Hello,</b><br>Please use the following link to authenticate your account:<br><a href="${url}">${url}</a>`, // html body
  };
  console.debug("before sending email");
  // send mail with defined transport object
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub,
    GoogleProvider,

    {
      id: "http-email",
      type: "email",
      name: "Email",
      from: process.env.NODEMAILER_EMAIL as string,
      maxAge: 24 * 60 * 60, // 24 hours
      options: {}, // Add any additional options here
      sendVerificationRequest,
    },
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

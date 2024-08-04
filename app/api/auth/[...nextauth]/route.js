import User from "@models/User";
import { ConnectToDB } from "@mongodb";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Invalid Email and Password");
          }

          await ConnectToDB();
          const user = await User.findOne({ email: credentials.email });
          if (!user || !user.password) {
            throw new Error("Email is not exist");
          }

          const isMatchPassword = await compare(
            credentials.password,
            user.password
          );
          if (!isMatchPassword) {
            throw new Error("Password does not match");
          }

          return user;
        } catch (error) {
          console.error("Error during authorization", error.message);
          throw new Error(error.message);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const mongoUser = await User.findOne({ email: session?.user.email });

      session.user = {
        id: mongoUser._id.toString(),
        username: mongoUser.username,
        email: mongoUser.email,
        profileImage: mongoUser.profileImage,
        phone: mongoUser.phone,
        about: mongoUser.about,
      };

      return session;
    },
  },
});

export { handler as GET, handler as POST };

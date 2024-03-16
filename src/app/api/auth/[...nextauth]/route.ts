import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDb } from "@/app/lib/mongodb";
import User from "@/models/User.model";
import axios from "axios";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ user, token, session, trigger }) {
      const { name, email, sub, picture } = token;

      try {
        await connectMongoDb();
        const userExists = await User.findOne({ email });

        if (!userExists) {
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              sub,
              picture,
            }),
          });

          if (res.ok) {
            await axios.post(`http://localhost:3000/api/send-mail`, { name });
            return user;
          }
        }

        if (session) {
          return {
            ...session,
            user: {
              ...session.user,
              role: userExists?.role ?? "",
              status: userExists?.status ?? "",
              userId: userExists?.userId ?? "",
            },
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async jwt({ token, user, trigger, session }) {
    if (trigger === "update") {
      return { ...token, ...session.user };
    }

    return { token, user };
  },
});

export { handler as GET, handler as POST };

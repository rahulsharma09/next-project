import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "576939322669-rb5pb4rqmbgo3cupeicllvfu6ojsk69t.apps.googleusercontent.com",
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };

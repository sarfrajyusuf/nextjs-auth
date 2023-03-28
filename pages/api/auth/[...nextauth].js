// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GMAIL_ID,
      clientSecret: process.env.GMAIL_SECERET_ID,
    }),
  ],
});

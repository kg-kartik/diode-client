import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
});

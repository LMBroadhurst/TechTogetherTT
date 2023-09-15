import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
  
export const authOptions: AuthOptions = {
  
  providers: [

    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    GithubProvider({
      // @ts-ignore
      clientId: process.env.GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
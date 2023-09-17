import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { useRouter } from "next/router";
  

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [

    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // GithubProvider({
    //   // @ts-ignore
    //   clientId: process.env.GITHUB_ID,
    //   // @ts-ignore
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
  ],
  callbacks: {
    // async jwt({ token, account, profile }) {
      
      // const router = useRouter()
      // router.push('/')
    // }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
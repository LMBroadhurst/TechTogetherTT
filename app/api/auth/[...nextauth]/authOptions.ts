import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/db"
import { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [

        GoogleProvider({
            // @ts-ignore
            clientId: process.env.GOOGLE_CLIENT_ID,
            // @ts-ignore
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),


    ],
    cookies: {},
    callbacks: {

        async jwt({ token, user }) {

            if (user) {
                token.id = user?.id
                token.dob = user?.dob
                token.events = user?.events
                token.joinDate = user?.joinDate
                token.location = user?.location
                token.role = user?.role
            }

            return token
        },

        // For Client Components
        async session({ session, user, token }) {

            const fullSession = {
                ...session,
                ...token
            }

            return fullSession
        }
    }
}
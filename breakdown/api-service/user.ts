import prisma from "@/prisma/db"
import { User } from "@prisma/client"

export async function findUserByEmail(email: string) {
    
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    return user
}
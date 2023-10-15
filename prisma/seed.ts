import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  
    const alice = await prisma.user.create({
        data: {
            id: "dfsdnvri",
            name: "Main Account",
            email: "mainaccount@prisma.io"
        }
    })

    const bob = await prisma.user.create({
        data: {
            id: "djkfngsg",
            name: "Bob Geldof",
            email: "bobgeldof@seed.db"
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
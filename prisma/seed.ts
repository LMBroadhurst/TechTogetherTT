import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
        },
    });

    await prisma.user.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
        },
    });

    await prisma.event.create({
        data: {
            name: 'TypeScript Event',
            description: 'A TypeScript event.',
            cityCountry: 'Berlin, Germany',
            localDateTime: new Date('2021-10-20T18:00:00').toISOString(),
            maxAttendance: 100,
            venue: 'PrismaClient'
        }
    });

    await prisma.event.create({
        data: {
            name: 'GraphQL Event',
            description: 'A GraphQL event.',
            cityCountry: 'Berlin, Germany',
            localDateTime: new Date('2021-10-21T18:00:00').toISOString(),
            maxAttendance: 100,
            venue: 'PrismaClient'
        }
    });
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
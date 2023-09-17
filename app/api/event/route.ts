import { Event, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextApiRequest, response: NextApiResponse<Event[]>) {
    const allPeople = await prisma.event.findMany()

    return NextResponse.json(allPeople)
}

export async function POST(request: NextApiRequest, response: NextApiResponse<Event>) {

    const abc = request.body as Event

    const {localDateTime, location, maxAttendance, name} = abc

    const newPerson = await prisma.event.create({
        data: {
            name: name,
            localDateTime: new Date(),
            location: location,
            maxAttendance: maxAttendance
        }
    })

    const x = NextResponse.json(newPerson)
    console.log(x)

    return x
}
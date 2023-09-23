import { Person } from "@/types/person";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const {body} = request
    return NextResponse.json({text: 'helloWorld'})
}

export async function POST(request: NextRequest) {

    const getAllPeople = await prisma.user.findMany()

    return NextResponse.json({people: getAllPeople})
}
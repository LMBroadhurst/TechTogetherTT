import { ATTENDING_STATUS } from "@/utils/enums";
import { PrismaClient, UserEvent } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {


    return NextResponse.json({
        status: 200,
    })
}

export async function GET() {

    return NextResponse.json({
        status: 200,
    })
}
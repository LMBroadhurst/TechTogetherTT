import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const email = request.url.split("/api/user/")[1]
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return NextResponse.json({
        status: 200,
        user: user,
    })
}

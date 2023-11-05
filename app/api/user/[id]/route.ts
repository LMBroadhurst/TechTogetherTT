import prisma from "@/prisma/db";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const email = pathname.split("/api/user/")[1];

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return NextResponse.json(user)
}

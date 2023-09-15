import { Person } from "@/types/person";
import { NextRequest, NextResponse } from "next/server";

export async function getPersonFromId(request: NextRequest, response: NextResponse) {

    const {body} = request
    return NextResponse.json({text: 'helloWorld'})

}

export async function getAllPeople(request: NextRequest, response: NextResponse) {

    const {body} = request
    return NextResponse.json({text: 'helloWorld'})

}

export async function postPerson(request: NextRequest, response: NextResponse) {

    const {body} = request
    return NextResponse.json({text: 'helloWorld'})

}
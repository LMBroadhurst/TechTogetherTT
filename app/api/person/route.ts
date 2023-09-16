import { Person } from "@/types/person";
import { NextRequest, NextResponse } from "next/server";

// export async function getPersonFromId(request: NextRequest, response: NextResponse) {

//     const {body} = request
//     return NextResponse.json({text: 'helloWorld'})
// }

// export async function getAllPeople(request: NextRequest, response: NextResponse) {

//     const getAllPeople = await prisma.person.findMany()

//     return NextResponse.json({people: getAllPeople})
// }

// export async function postPerson(request: NextRequest, response: NextResponse) {

//     const newPerson = await prisma.person.create({
//         data: {
//             firstName: 'Alice',
//             lastName: 'Squeal',
//             email: 'alice@prisma.io',
//             password: ''
//         }
//     })

//     return NextResponse.json({text: 'helloWorld'})
// }

// export async function putPerson(request: NextRequest, response: NextResponse) {

//     const newPerson = await prisma.person.update({
//         where: {
//             id: 1
//         },
//         data: {
//             firstName: 'New Name'
//         }
//     })

//     return NextResponse.json({text: 'helloWorld'})
// }

// export async function deletePerson(request: NextRequest, response: NextResponse) {

//     const newPerson = await prisma.person.delete({
//         where: {
//             id: 1
//         }
//     })

//     return NextResponse.json({text: 'helloWorld'})
// }
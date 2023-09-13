import express from 'express'
import cors from 'cors'
import { PrismaClient } from "@prisma/client"
import { Person } from '@/types/person'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get('', (req, res) => {
    return res.json("Hello World")
})
// app.post('/person', async (req, res) => {
//     const {} = req.body

//     const person: Person = await prisma.person.create({
//         data: {

//         }
//     })

//     res.json(person)
// })


const server = app.listen(3001)
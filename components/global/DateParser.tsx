import React, { FC } from 'react'

export default function DateParser({ date }: { date: Date}) {

    const dayOfMonth = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    const hour = date.getHours()
    const minutes = date.getMinutes()

    return <span>{dayOfMonth}-{month}-{year}, {hour}:{minutes} </span>
}

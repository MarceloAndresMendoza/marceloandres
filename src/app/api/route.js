import { NextResponse } from "next/server"

// API Handlers
export const GET = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    /* "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false */
    const data = await res.json()
    return NextResponse.json({
        message: 'Hello from the API!',
        exampleData: data,
        status: 200
    }, {
        status: 200
    })
}

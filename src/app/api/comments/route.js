import { NextResponse } from "next/server"
import { getAllComments, addComment } from "@database/controllers/dbfres.comments.controller"

export const GET = async () => {
    const res = await getAllComments()
    return NextResponse.json({
        data: res.data
    } , {
        status: res.status
    })
}

export const POST = async (req) => {
    const data = await req.json()
    const res = await addComment(data)
    return NextResponse.json({
        data: res.data
    }, {
        status: res.status
    })
}
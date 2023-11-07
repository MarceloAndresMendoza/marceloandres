'use client'
import { useEffect, useState } from "react"
import { SubtitleH3 } from "../ui/SubtitleH3"

const CommentsBox = () => {
    const [comments, setComments] = useState([])
    // let data = ''
    // const getComments = async () => {
    //     const res = await fetch('http://192.168.5.2:3000/api/comments')
    //     data = await res.json()
    // }
    useEffect(() => {
        const getComments = async () => {
            const res = await fetch('http://192.168.5.2:3000/api/comments')
            const data = await res.json()
            setComments(data.data)
            console.log(data.data)
        }
        getComments()
    }, [])


    return (
        <div className="col-span-1 md:col-span-2 bg-slate-700 rounded-md p-4 min-h-[300px] flex flex-col">
            <div className="flex flex-row justify-between items-center sm:items-start">
                <SubtitleH3
                    title="Comentarios"
                    titleColor="white"
                />
                <button className="
                    bg-slate-600
                    text-white text-sm sm:text-md
                    rounded-md
                    px-4
                    py-2
                    hover:bg-slate-500
                    transition
                    duration-300
                    ease-in-out

                ">Comentar</button>
            </div>
            <div className="bg-white text-black rounded-md p-4 flex-1 overflow-y-auto max-h-[300px]">
                {comments ?
                    comments.map((comment, index) => {
                        const localizedDate = new Date(comment.createdAt).toLocaleDateString()
                        return (
                            <div key={index} className="border-b-2 border-slate-400 py-2">
                                <div className="flex flex-row gap-4 items-center justify-between">
                                    <p className="text-slate-700 text-lg font-semibold">{comment.username}</p>
                                    <p className="text-slate-400 text-sm">{localizedDate}</p>
                                </div>
                                <p className="text-slate-700 text-md">{comment.comment}</p>

                            </div>
                        )
                    }) : null}
            </div>

        </div>
    )
}

export default CommentsBox
'use client'
import { useEffect, useState } from "react";
import { SubtitleH3 } from "../ui/SubtitleH3";
import swal from 'sweetalert'

const CommentsBox = () => {
    const [comments, setComments] = useState([])
    const [showSendComment, setShowSendComment] = useState(false)
    const [charCount, setCharCount] = useState(0)
    const [sendingComment, setSendingComment] = useState(false)

    const getComments = async () => {
        const res = await fetch('https://marceloandres.cl/api/comments')
        const data = await res.json()
        setComments(data.data)
    }
    useEffect(() => {
        getComments()
    }, [])

    async function handleServerResponse(serverResponse) {
        if (serverResponse && serverResponse.aprobado === 'sí') {
            swal('Comentario enviado', serverResponse.response ?? null, 'success')
        } else {
            swal('No se ha publicado tu comentario', serverResponse.response ?? null, 'warning')
        }
    }


    useEffect(() => {

        const sendComment = async (username, comment) => {
            setSendingComment(true)
            const res = await fetch('https://marceloandres.cl/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    comment
                })
            })
            const data = await res.json();
            setShowSendComment(false);
            getComments()
            const serverResponse = await data.data;
            await handleServerResponse(serverResponse);
            setSendingComment(false);
        }

        if (showSendComment) {
            document.getElementById('commentForm').addEventListener('submit', (e) => {
                e.preventDefault()
                const username = e.target.username.value
                const comment = e.target.comment.value
                if (username.length > 0 && comment.length > 0) {
                    sendComment(username, comment)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Debes llenar todos los campos',
                        confirmButtonText: 'Aceptar'
                    })
                }
            })
        }
    }, [showSendComment])

    // a form with a simple 'name' and 'comment' input
    return (
        !showSendComment ?
            <div className="col-span-1 md:col-span-2 bg-slate-700 rounded-md p-4 min-h-[360px] flex flex-col">
                <div className="flex flex-row justify-between items-center sm:items-start">
                    <SubtitleH3
                        title="Comentarios"
                        titleColor="white"
                    />
                    <button
                        className="bg-slate-600 text-white text-sm sm:text-md rounded-md px-4 py-2  hover:bg-slate-500 transition duration-300 ease-in-out"
                        onClick={() => setShowSendComment(true)}
                    >
                        Comentar
                    </button>
                </div>
                <div className="bg-slate-600 text-white rounded-md p-4 flex-1 flex flex-col overflow-y-auto max-h-[300px]">
                    {comments.length > 0 ?
                        comments.map((comment, index) => {
                            const localizedDate = new Date(comment.createdAt).toLocaleDateString()
                            return (
                                <div key={index} className="border-b border-slate-700 py-2">
                                    <div className="flex flex-row gap-4 items-center justify-between">
                                        <p className="text-slate-300 text-lg font-semibold">{comment.username}</p>
                                        <p className="text-slate-800 text-base">{localizedDate}</p>
                                    </div>
                                    <p className="text-slate-100 text-base">{comment.comment}</p>

                                </div>
                            )
                        }) : <div className="flex justify-center items-center h-full text-slate-900">Sé el primero en comentar</div>}
                </div>

            </div>
            :
            !sendingComment ?
                <div className="col-span-1 md:col-span-2 bg-slate-700 rounded-md p-4 min-h-[360px] flex flex-col">
                    <div className="flex flex-row justify-between items-center sm:items-start">
                        <SubtitleH3
                            title="Comentarios"
                            titleColor="white"
                        />
                        <button
                            className="bg-red-700 text-white text-sm sm:text-md rounded-md px-4 py-2  hover:bg-red-500 transition duration-300 ease-in-out"
                            onClick={() => setShowSendComment(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                    <div className="bg-white text-black rounded-md p-4 flex-1 overflow-y-auto max-h-[300px]">
                        <form id="commentForm" className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="username" className="text-slate-700 text-lg font-semibold">Nombre</label>
                                <input type="text" name="username" id="username" className="border-2 border-slate-400 rounded-md px-4 py-2" maxLength={50} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="comment" className="text-slate-700 text-lg font-semibold">Comentario</label>
                                <textarea name="comment" id="comment" cols="30" rows="3" className="border-2 border-slate-400 rounded-md px-4 py-2" maxLength={250} onChange={
                                    (e) => {
                                        setCharCount(e.target.value.length)
                                    }

                                }></textarea>
                            </div>
                            <div className="flex flex-row justify-between text-slate-600 gap-2">
                                <div className="flex flex-wrap sm:gap-2">
                                    <p>Caracteres:</p>
                                    <p className="text-slate-400 text-base" id="charCount"> {charCount} / 250</p>
                                </div>

                                <p>
                                    Este comentario será moderado por IA previo a su publicación.
                                </p>
                                <button
                                    className={` text-white text-sm sm:text-md rounded-md px-4 py-2 ${charCount == 0 ? 'bg-slate-200' : 'bg-green-600 hover:bg-green-800'}  transition duration-300 ease-in-out`}
                                    onClick={() => setShowSendComment(true)}
                                    disabled={charCount === 0}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                :
                <div className="text-slate-700 bg-white flex justify-center items-center col-span-1 md:col-span-2 rounded-md p-4 min-h-[360px]">
                    Enviando...
                </div>
    )
}

export default CommentsBox
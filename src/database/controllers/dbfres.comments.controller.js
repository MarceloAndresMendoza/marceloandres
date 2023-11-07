import { Comment } from "@database/models/comments.model";
import { db } from "@database/config/dbfres.mongodb.env";
import { openaiCommentModerate } from "@database/controllers/openai.controller";

export const getAllComments = async () => {
    db();
    try {
        const allComments = await Comment.find();
        return {
            status: 200,
            data: allComments,
        }
    } catch (error) {
        return {
            status: 500,
            message: 'No se pudo obtener los comentarios',
            error: error
        }
    }
}

export const addComment = async (req) => {
    db();
    // Moderate comment using open ai
    const moderatedComment = await openaiCommentModerate(req.comment);
    console.log(moderatedComment);
    try {
        if (moderatedComment.aprobado == 'sí') {
            const data = new Comment(req);
            const saveComment = await data.save();
            return {
                status: 200,
                message: 'Comentario agregado',
                data: saveComment,
            }
        } else if (moderatedComment.aprobado == 'contactar') {
            return {
                status: 300,
                message: 'Derivar a contacto',
                data: moderatedComment,
            }
        } else {
            return {
                status: 400,
                message: 'Comentario no aprobado',
                data: moderatedComment,
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: 'No se pudo agregar el comentario',
            error: error
        }
    }
}
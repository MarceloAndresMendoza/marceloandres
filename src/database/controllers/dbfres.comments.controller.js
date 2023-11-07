import { Comment } from "@database/models/comments.model";
import { db } from "../config/dbfres.mongodb.env";

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
    
    try {
        const data = new Comment(req);
        const saveComment = await data.save();
        return {
            status: 200,
            data: saveComment,
        }
    } catch (error) {
        return {
            status: 500,
            message: 'No se pudo agregar el comentario',
            error: error
        }
    }
}
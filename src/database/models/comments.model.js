import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

export const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);
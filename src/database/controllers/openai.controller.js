import { MODERATOR } from '@/utils/aiprompt';
import OpenAI from 'openai';
const openai = new OpenAI();

export const openaiCommentModerate = async (req) => {
    try {
        const moderatorPrompt = MODERATOR;
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: moderatorPrompt
                }, {
                    role: "user",
                    content: req
                }
            ]
        })
        return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
        return {
            status: 500,
            message: 'No se pudo moderar el comentario',
            error: error
        }
    }
}
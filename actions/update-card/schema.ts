import {z} from 'zod';

export const UpdateCard = z.object({
    title: z.optional(z.string({
        required_error: "Title is required",
        invalid_type_error: "Title is required"
    }).min(3, {
        message: "title is too short"
    })),
    description: z.optional(
        z.string({
            required_error: "Description is required",
            invalid_type_error: "description is required" 
        }).min(3, {
            message: "Description is too short." 
        })
    ),
    id: z.string(),
    boardId: z.string(),
})
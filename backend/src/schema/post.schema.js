import {z} from "zod"

export const postSchema = z.object({
    publication: z.string({
        required_error: 'publication is required'
    }).max(40, {
        message: 'publication must be at least 40 characters'
    })
})
import { z } from "zod"

export const registerSchema = z.object({
    name: z.string({
        required_error: 'name is required'
    }),
    email: z.string({
        required_error: 'email is required'
    }).email({
        message: 'Invalid email address'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'email is required'
    }).email({
        message: 'Invalid email address'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})
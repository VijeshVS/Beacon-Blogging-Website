import z from 'zod'

export const signUpInput = z.object({
    name : z.string().optional(),
    email : z.string().email(),
    password : z.string().min(6)
})

export const signInInput = z.object({
    email : z.string().email(),
    password: z.string().min(6)
})

export const createPostInput = z.object({
    title : z.string(),
    content : z.string(),
    authorId : z.string()
})

export const updatePostInput = z.object({
    title: z.string().optional(),
    content : z.string().optional()
})

export type signUpType = z.infer<typeof signUpInput>
export type signInType = z.infer<typeof signInInput>
export type createPostType = z.infer<typeof createPostInput>
export type updatePostType = z.infer<typeof updatePostInput>

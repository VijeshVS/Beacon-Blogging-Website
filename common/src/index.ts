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

export const UserUpdateInput = z.object({
    name : z.string().optional(),
    email : z.string().email().optional(),
    description : z.string().optional(),
    imgLink : z.string().optional()
})

export const createPostInput = z.object({
    title : z.string(),
    content : z.string(),
    authorId : z.string(),
    created : z.string(),
    description : z.string()
})

export const updatePostInput = z.object({
    title: z.string().optional(),
    content : z.string().optional(),
    description : z.string().optional()
})

export type signUpType = z.infer<typeof signUpInput>
export type signInType = z.infer<typeof signInInput>
export type createPostType = z.infer<typeof createPostInput>
export type updatePostType = z.infer<typeof updatePostInput>
export type UserUpdateType = z.infer<typeof UserUpdateInput>


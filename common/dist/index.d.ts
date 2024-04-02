import z from 'zod';
export declare const signUpInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const UserUpdateInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    imgLink: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    description?: string | undefined;
    imgLink?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    description?: string | undefined;
    imgLink?: string | undefined;
}>;
export declare const createPostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    authorId: z.ZodString;
    created: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    title: string;
    content: string;
    authorId: string;
    created: string;
}, {
    description: string;
    title: string;
    content: string;
    authorId: string;
    created: string;
}>;
export declare const updatePostInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
    description?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
    description?: string | undefined;
}>;
export type signUpType = z.infer<typeof signUpInput>;
export type signInType = z.infer<typeof signInInput>;
export type createPostType = z.infer<typeof createPostInput>;
export type updatePostType = z.infer<typeof updatePostInput>;
export type UserUpdateType = z.infer<typeof UserUpdateInput>;

import * as z from 'zod'

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const registerSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters"),

    email: z.email("Invalid email"),

    password: z
        .string()
        .regex(regex, "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character."),

    confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
})

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(8, 'Wrong password')
})

export const ForgetPasswordSchema = z.object({
     email: z.email("Invalid email"),
})

export const ResetPasswordSchema = z.object({
    password: z
        .string()
        .regex(regex, "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character."),

    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
}) 
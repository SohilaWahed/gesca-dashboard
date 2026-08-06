import * as z from 'zod'

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(3, "First name must be at least 3 characters"),

    lastName: z
        .string()
        .min(3, "Last name must be at least 3 characters"),

    email: z.email("Invalid email"),

    password: z
        .string()
        .regex(regex, "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character."),

    phone: z.string().regex(/^01[0125]\d{8}$/, "Invalid Egyptian phone number"),

    role:z.enum(['Admin', 'Manager' , 'SalesEmployee'])
})

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(8, 'Wrong password')
})

export const ForgotPasswordSchema = z.object({
    email: z.email("Invalid email Address"),
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
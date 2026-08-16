import type z from "zod";
import type { ForgotPasswordSchema, loginSchema, registerSchema, ResetPasswordSchema } from "@/schemas/auth.schema";


export interface AuthContextType {
    loggedUser: LoggedUser | null;
    isAuthenticated: boolean;
    loginContext: (res: LoginResponse) => void;
    logoutContext: () => void;
}

export interface LoginResponse {
    success: boolean
    message: string
    data: DataLogin
}

export interface DataLogin {
    user: LoggedUser
    accessToken: string
    refreshToken: string
}

export interface LoggedUser {
    id: string
    email: string
    firstName: string
    lastName: string
    role: UserRole
}

export type UserRole =  "Admin"| "Manager" | "SalesEmployee"

export interface RegisterResponse {
    success: boolean
    message: string
    data: User
}
export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
}

export interface forgetPasswordResponse {
    success: boolean,
    message: string
}

export type RegisterPayload = z.infer<typeof registerSchema>

export type LoginPayload = z.infer<typeof loginSchema>

export  type ForgotPasswordPayload = z.infer<typeof ForgotPasswordSchema>

export  type ResetPasswordPayload = z.infer<typeof ResetPasswordSchema>

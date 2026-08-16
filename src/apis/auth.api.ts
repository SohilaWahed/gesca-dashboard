
import { axiosAuth, axiosClient } from '@/lib/axiosConfigrations'
import type { ForgotPasswordPayload, forgotPasswordResponse, LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from '@/types/auth.types'

export const login = async (credentails: LoginPayload): Promise<LoginResponse> => {
    const res = await axiosAuth.post(`auth/login`, credentails)
    return res.data
}

export const signup = async (credentails: RegisterPayload): Promise<RegisterResponse> => {
    const res = await axiosClient.post(`auth/register`, credentails)
    return res.data
}

export const forgotPassword = async (credentails: ForgotPasswordPayload): Promise<forgotPasswordResponse> => {
    const res = await axiosAuth.post('auth/forgot-password', credentails)
    return res.data
}


export const resetPassword = async (token: string | null, newPassword: string) => {
    const res = await axiosAuth.post('auth/reset-password', {
        token,
        newPassword
    })
    return res.data
}

export const refreshToken = async (refreshToken: string) => {
    const res = await axiosAuth.post('auth/refresh-token', { refreshToken })
    return res.data
}

export const logout = async (refreshToken: string) => {
    const res = await axiosClient.post('/auth/logout', { refreshToken })
    return res.data
}
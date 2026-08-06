import axios from "axios"
import { clearSession, getAccessToken, getRefreshToken, setAccessToken } from "../utils/tokenStorage"
import { logout, refreshToken } from '../apis/auth.api';


export const axiosAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosClient.interceptors.request.use((req) => {
    const token = getAccessToken()
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})


axiosClient.interceptors.response.use((res) => res, async (error) => {
    if (error.response?.status !== 401) {
        return Promise.reject(error)
    }
    const storedRefreshToken = getRefreshToken()
    if (!storedRefreshToken) {
        clearSession()
        return Promise.reject(error)
    }
    try {
        const tokens = await refreshToken(storedRefreshToken)
        setAccessToken(tokens.accessTokens)

        const originalRequest = error.config
        originalRequest.headers.Authorization = `Bearer ${tokens.accessTokens}`

        const response = await axiosClient(originalRequest)
        return response
    } catch (refreshError) {
        logout(storedRefreshToken);
        clearSession()
        return Promise.reject(refreshError);
    }

})




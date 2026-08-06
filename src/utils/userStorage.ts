import type { User } from "@/types/auth.types"

export const getUser = () => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
}
export const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const clearUser = ()=>{
    localStorage.removeItem('user')
}
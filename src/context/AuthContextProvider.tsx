
import { useState, type ReactNode } from 'react'
import { AuthContext } from './contexts'
import type { LoginResponse, User } from '@/types/auth.types'
import { clearSession, setAccessToken, setRefreshToken } from '@/utils/tokenStorage'
import { getUser, setUser } from '@/utils/userStorage'

export default function AuthContextProvider({children}:{children:ReactNode}) {


    const [loggedUser, setLoggedUser] = useState<User | null>(()=> {
        return getUser()
    })
    const isAuthenticated = !!loggedUser;

    const loginContext = (res: LoginResponse): void => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setUser(res.data.user)

        setLoggedUser(res.data.user)

    }

    const logoutContext = (): void => {
        setLoggedUser(null);
        clearSession()
    }


    return (
        <AuthContext.Provider value={{ loginContext, logoutContext, isAuthenticated, loggedUser}}>
            {children}
        </AuthContext.Provider>
    )
}

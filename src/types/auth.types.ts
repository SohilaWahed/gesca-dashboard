export interface AuthContextType {
    loggedUser: UserRole | null;
    isAuthenticated: boolean;
    loginContext: (res: LoginResponse) => void;
    logoutContext: () => void;
}


export type LoginRequest = {
    email: string,
    password: string
}

export interface LoginResponse {
    success: boolean
    message: string
    data: DataLogin
}

export interface DataLogin {
    user: UserRole
    accessToken: string
    refreshToken: string
}

export interface UserRole {
    id: string
    email: string
    firstName: string
    lastName: string
    role: Role
}

export interface RegisterRequest {
    email: string
    password: string
    firstName: string
    lastName: string
    role: string
    phone: string
}

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

export interface forgetPasswordRequest {
    email: string | null
}

export interface forgetPasswordResponse {
    success: boolean,
    message: string
}

type Role = "Admin" | "Manager" | "SalesEmployee"


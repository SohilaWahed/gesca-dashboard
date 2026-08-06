import { clearUser } from "./userStorage"

export const setAccessToken = (accessToken:string)=>{
    localStorage.setItem('accessToken',accessToken)
}
export const getAccessToken = ():(string|null)=>{
  return  localStorage.getItem('accessToken')
}

export const setRefreshToken = (refreshToken:string)=>{
    localStorage.setItem('refreshToken',refreshToken)
}
export const getRefreshToken = ():(string|null)=>{
  return  localStorage.getItem('refreshToken')
}

export const clearTokens = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
}

export const clearSession = () => {
  clearTokens();
  clearUser()
  window.location.replace("/auth/login");
};
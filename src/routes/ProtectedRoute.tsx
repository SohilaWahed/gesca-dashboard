import { useAuth } from '@/hooks/useAuth'
import { getAccessToken } from '@/utils/tokenStorage'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ allowedRoles }: { allowedRoles: string[] }) {

  const accessToken = getAccessToken()
  const { loggedUser } = useAuth();

  if (!accessToken) {
    return <Navigate to={'/auth/login'} replace />
  }

  if (!loggedUser) {
    return <Navigate to={'/403'} replace />
  }

  if (allowedRoles && !allowedRoles.includes(loggedUser.role)) {
    return <Navigate to='/auth/login' replace />
  }

  return (
    <Outlet />
  )
}

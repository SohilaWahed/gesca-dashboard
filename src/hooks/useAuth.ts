import { useContext } from 'react';
import { AuthContext } from '../context/contexts';

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('authTheme must be used within AuthProvider')
    }
    return context
}
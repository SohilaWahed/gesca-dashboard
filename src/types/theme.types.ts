
export type Theme = 'dark' | 'light' | 'system'

export interface ThemeContextType {
    theme: Theme,
    setTheme: (theme: Theme) => void,
    isTheme: (value: string | null) => value is Theme
}
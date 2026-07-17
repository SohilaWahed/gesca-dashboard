export type Theme = 'dark' | 'light' | 'system'

export interface ThemeContextType  {
    theme: Theme;
    setTheme: (them: Theme) => void,
    isTheme:(value:string|null) => value is Theme
}
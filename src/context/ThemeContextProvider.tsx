import type { Theme } from '@/types/theme.type'
import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from './contexts'

export default function ThemeContextProvider({ children }: { children: ReactNode }) {

  function isTheme(value: string | null): value is Theme {
    return value === 'dark' || value === 'light' || value === 'system'
  }

  function getStoredTheme(): Theme {
    const storedTheme = localStorage.getItem('theme')
    if (isTheme(storedTheme)) {
      return storedTheme
    }
    return 'light'
  }

  function resolveTheme(theme: Theme): "dark" | "light" {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return theme;
  }

  function applyTheme(theme: "light" | "dark") {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }

  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())

  // check theme and save and apply
  useEffect(() => {

    localStorage.setItem('theme', theme)

    const resolvedTheme = resolveTheme(theme)

    applyTheme(resolvedTheme)


  }, [theme])

  // handle system changes 
  useEffect(() => {

    if (theme !== 'system') return;

    const handleChange = () => {
      applyTheme(resolveTheme("system"));
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)")
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }

  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

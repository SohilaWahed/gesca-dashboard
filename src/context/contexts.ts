import type { AuthContextType } from "@/types/auth.types";
import type { ThemeContextType } from "@/types/theme.types";
import { createContext } from "react";


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

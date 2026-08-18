import AuthContextProvider from "./context/AuthContextProvider"
import ThemeContextProvider from "./context/ThemeContextProvider"
import AppRouter from "./routes/AppRouter"
import { Toaster } from "sonner";


function App() {

  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Toaster
            richColors
            position={document.documentElement.dir === 'rtl' ? "top-left" : "top-right"}
            duration={3000}
          />
          <AppRouter />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App

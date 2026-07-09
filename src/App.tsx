import ThemeContextProvider from "./context/ThemeContextProvider"
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <>
      <ThemeContextProvider>
        <AppRouter/>
      </ThemeContextProvider>
    </>
  )
}

export default App

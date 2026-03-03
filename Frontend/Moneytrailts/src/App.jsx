import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './Routes/AppRouter'

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
        toastStyle={{
          background: "#18181f",
          border: "1px solid rgba(255,255,255,0.07)",
          color: "#f1f1f5",
          borderRadius: 12,
        }}
      />
    </>
  )
}

export default App

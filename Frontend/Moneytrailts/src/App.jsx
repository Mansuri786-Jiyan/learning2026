// import './App.css'
import { Bounce, ToastContainer } from 'react-toastify'
import AppRouter from './Routes/AppRouter'

function App() {


  return (
    <>
      <AppRouter></AppRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App

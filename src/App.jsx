import { Toaster } from 'react-hot-toast'
import About from './components/About'
import Contact from './components/Contact'
import Tools from './components/Tools'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Project'

function App() {

  return (
    <>
    <div>
      <Navbar/>  
      <Home/> 
      <About/> 
      <Projects/>
      <Tools/> 
      <Contact/> 
      <Footer/> 
      <Toaster/>
    </div>
    </>
  )
}

export default App

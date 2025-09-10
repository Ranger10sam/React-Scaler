
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        
          
        <Navbar/>

        <Routes>
          {/* <Home/>
          <About/>
          <Contact/> */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

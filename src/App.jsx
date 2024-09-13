import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false, 
    });
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
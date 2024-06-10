import React,{useEffect} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects'
import Hire from './components/Hire'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration:2000,
    });
  }, [])

  return (
    <>
     <Header/>
     <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/hire' element={<Hire/>} />
      </Routes>
     </Router>
     <Footer/>
    </>
  )
}

export default App

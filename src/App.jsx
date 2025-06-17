import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navbar';
import { Home } from './pages/Home/home';
import { About } from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './components/Footer/footer';

function App() { 
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App

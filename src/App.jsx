import './App.css'
import CurrencyConverter from './Components/Converter/CurrencyConverter'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Uses from './Components/Uses/Uses'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/about" element={<About />} />
          <Route path="/uses" element={<Uses />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

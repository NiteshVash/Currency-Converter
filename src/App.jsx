import './App.css'
import CurrencyConverter from './Components/Converter/CurrencyConverter'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <CurrencyConverter />
      <Footer />
    </div>
  )
}

export default App

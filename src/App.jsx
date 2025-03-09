import './App.css'
import CurrencyConverter from './Components/Converter/CurrencyConverter'
import Navbar from './Components/Navbar/Nvbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/Abut'
import Uses from './Components/Uses/Uses'
import { useEffect, useState } from 'react'
 
function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderComponent = () => {
    switch (hash) {
      case '#/about':
        return <About />;
      case '#/uses':
        return <Uses />;
      default:
        return <CurrencyConverter />;
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        {renderComponent()}
      </div>
      <Footer />
    </div>
  )
}

export default App;
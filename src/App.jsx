import './App.css';

import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Hero/>
      <Work/>
      <About/>
      <Footer />
    </div>
  )
}

export default App

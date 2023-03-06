import './App.css';

import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Tech from './components/Tech';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Hero/>
      <Work/>
      <About/>
      <Tech/>
      <Footer />
    </div>
  )
}

export default App

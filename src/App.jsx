import './App.css';

import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

// Lazy import example if needed for optomization.
// const Contact = lazy(() => import('./Pages/Contact'));

function App() {

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/work" element={ <Work/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />

      </Routes>
    </div>
  )
}

export default App

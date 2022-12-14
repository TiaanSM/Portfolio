import './Hero.css';
import img1 from '../assets/img.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.jpg';

const Hero = () => {
  return (
    <header>
        <div className="hero-img-container">
            <img src={img1} className="hero-image img1" alt="" />
            <img src={img5} className="hero-image img2" alt="" />
            <img src={img2} className="hero-image img3" alt="" />
            <img src={img4} className="hero-image img4" alt="" />
            <img src={img3} className="hero-image img5" alt="" />
        </div>
        <div className="hero-text-container">
          <h1 className="hero-title">Corporate gifting <br/><span className="text-tail">made easy</span></h1>
          <div className="hero-cta-container">
            <p className="hero-text-desc">Discover better gifting, at any scale,<br/> for companies that care.</p>
            <button className="hero-cta">GET STARTED</button>
          </div>
        </div>
    </header>
  )
}

export default Hero
/*
{require('../assets/img5.jpg')}
*/
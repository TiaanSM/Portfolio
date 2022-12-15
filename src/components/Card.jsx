import './Card.css';

const Card = () => {
  return (
    <div className="main-card-container">
        <img src="" alt="" className="card-image" />
        <div className="card-text-container">
            <p className="intro-header">ENTERPRISE</p>
            <h4 className="intro-title">Gifting on a larger scale?</h4>
            <p className="intro-desc">When it comes to sending hundreds or thousands of gifts, make it special (and easy) with advanced performance tracking and fully branded experiences.</p>
            <ul className="intro-list">
                <li>Execute campaigns, at any scale, in 180+ countries</li>
                <li>Customize gifts, packaging and platform UX</li>
                <li>Gain dedicated support from our Client Success team</li>
            </ul>
            <button className="card-cta">EXPLORE ENTERPRISE</button>
        </div>
    </div>
  )
}

export default Card
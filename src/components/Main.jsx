import './Main.css';

const Main = () => {
  return (
    <main>
        <span className="main-intro">
            <h2 className="main-title">Choose your gifting solution</h2>
            <p className="main-desc">From fast, on-demand offerings to completely branded experiences, here's a look into how you can get started on your gifting journey.</p>
        </span>

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

    <div className="main-card-container">
        <img src="" alt="" className="card-image" />
        <div className="card-text-container">
            <p className="intro-header">ON DEMAND</p>
            <h4 className="intro-title">Gifting just a few people?</h4>
            <p className="intro-desc">On-Demand allows SMBs access to better, faster corporate gifting. Choose from hundreds of gifts that send within minutes, no sign-up fees or contracts included.</p>
            <ul className="intro-list">
                <li>Best-in-class vendors = no bad gifts, ever</li>
                <li>Only pay for gifts redeemed</li>
                <li>Now available across the US, EU and UK</li>
            </ul>
            <button className="card-cta">DISCOVER ON DEMAND</button>
        </div>
    </div>

    </main>
  )
}

export default Main
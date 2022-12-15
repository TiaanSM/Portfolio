import './Main.css';
import Card from './Card';

const Main = () => {
  return (
    <main>
        <span className="main-intro">
            <h2 className="main-title">Choose your gifting solution</h2>
            <p className="main-desc">From fast, on-demand offerings to completely branded experiences, here's a look into how you can get started on your gifting journey.</p>
        </span>
        <Card />
        <Card />
    </main>
  )
}

export default Main
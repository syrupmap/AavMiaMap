import "./Home.css";
import {useEffect, useState} from "react";
import layer1 from "./img/grass.png";
import layer2 from "./img/picnicBlanket.png";
import layer3 from "./img/aavMiMap.png";
import layer4 from "./img/creativePortfolio.png";


import photo1 from "./img/rec.png";
import photo2 from "./img/rec.png";
import photo3 from "./img/rec.png";
import photo4 from "./img/rec.png";
import photo5 from "./img/rec.png";
import photo6 from "./img/rec.png";

function Hero(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<section className = "hero">
        <img src = {layer1} alt="" className = "layer" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></img>
        <img src = {layer2} alt="" className = "layer" style={{ transform: `translateY(${scrollY * -0.15}px)` }}></img>
        <img src = {layer3} alt="" className = "layer" style={{ transform: `translateY(${scrollY * -0.2}px)` }}></img>
        <img src = {layer4} alt="" className = "layer" style={{ transform: `translateY(${scrollY * -0.2}px)` }}></img>

{/* 
        <div className="hero-title-stack">
    <h1 className="hero-title">Artworks</h1>

    <div className="hero-card hero-card-1"></div>
    <div className="hero-card hero-card-2"></div>
    <div className="hero-card hero-card-3"></div>
</div> */}
    </section>);
}

function Gallery(props){
    return (<section className="gallery-section">
        <h2 className="gallery-title">{props.title}</h2>

        <div className="gallery-grid">
            <div className="gallery-item">
                <img src={photo1} alt="Artwork 1" className="gallery-card" />
            </div>
            <img src={photo2} alt="" className="gallery-card" />
            <img src={photo3} alt="" className="gallery-card" />
            <img src={photo4} alt="" className="gallery-card" />
            <img src={photo5} alt="" className="gallery-card" />
            <img src={photo6} alt="" className="gallery-card" />
        </div>
    </section>);
}

function Home() {
    return (
        <main className="home-page">
            
            <Hero />
            <Gallery title="Artworks" />
        </main>
    )
}
export default Home;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'auto'
    const panolens = Array.from(document.getElementsByClassName('panolens-container'))
    panolens.map(pan => {
      return pan.parentNode.removeChild(pan);
    })
  })

  return (
    <div className={`fullpage ${show ? "" : "hide"}`}>
      <div className="intro-title">
        <h1>The Advantages Of Tender Loving Care</h1>
        <h2>By Laura Kay Keeling</h2>
        <h2>Contact 2021 Featured Exhibtion</h2>
      </div>
      <div className="intro-text">
        <p>
          Welcome to The Advantages of Tender Loving Care a Featured Exhibition in the Scotiabank CONTACT Photography Festival by Laura Kay Keeling. This exhibition features the first artworks in Keeling’s new series of moving images and collages that merge sourced imagery with scanned floral elements set in a naturalistic landscape with accompanying audio.
        </p>
        <p>Instructions: Click on the flowers to move from sphere to sphere, and explore the immersive panoramas to discover Laura's works.</p>
        <p>For a full image list with details about the work, please visit the About Page.</p>
        <p>Thank you for being here!</p>
      </div>
      <div className="cyoa-buttons">
        <Link to="/guided">
          <button onClick={() => setShow(false)}>Take The Guided Tour</button>
        </Link>
        <Link to="/self-guided">
          <button onClick={() => setShow(false)}>See Yourself Around</button>
        </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import earth from "../../images/earth.jpeg";
import computer from  "../../images/comp.png";

export default function CS_GGIS() {
  const [currIndex, setCurrIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const items = [
    "I care about the Earth, specifically environmental conservation and protection!",
    "I wanted to find ways to use technical skills to protect, restore and better understand OUR planet",
    "For a long time, I planned to pursue a dual degree in Computer Science and Environmental Science",
    "But with the time constraints of earning my Bachelor's degree, I eventually had to choose one path",
    "UIUC stood out because it offered a perfect way to combine my technical interests with my passion for the environment",
    "Hence, why I chose to major in CS + GGIS! I loved learning about technology and the kind of the impact it could have.",
    "If you were to ask me again, I would pick CS + GGIS again in a heartbeat ♡"
  ];

  const handleGlobeClick = () => {
    setRotation(prev => prev + 360);
    setCurrIndex(prev => (prev + 1) % items.length);
  };

  const handleComputerClick = () => {
    setCurrIndex(prev => (prev + 1) % items.length);
  };

  return (
    <div className="about-interests-div">
        <h2>Why I Chose CS + GGIS</h2>
        <p>Now, you may be wondering why I chose to major in CS + GGIS for my Bachelor's degree...</p>
        <p>Here are some reasons why I chose it:</p>
        <p className="hint"> PSSST: click on the computer OR the globe to explore the different reasons! </p>
        
        <div className="cs-ggis-carousel-div">
            <div className="items-container">

                <div className="computer-wrapper" onClick={handleComputerClick}>
                <img src={computer} alt="computer" className="computer-image" />
                <p className="screen-text">{items[currIndex]}</p>
                </div>

                <div className="earth-side" onClick={handleGlobeClick}>
                <img
                    src={earth}
                    alt="earth"
                    className="earth-image"
                    style={{ transform: `rotateY(${rotation}deg)` }}
                />
                </div>

            </div>
        </div>

      
    </div>
  );
}

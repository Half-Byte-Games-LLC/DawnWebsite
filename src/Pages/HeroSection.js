import React from 'react';
import '../Styles/HeroSection.css';

const HeroSection = () => {
    return (
        <div
            className="hero-container"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Images/DawnLoadingImage.png)`,
            }}
        >
            <button className="cta-button">View the Roadmap</button>
        </div>
    );
};

export default HeroSection;
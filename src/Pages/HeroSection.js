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
        </div>
    );
};

export default HeroSection;
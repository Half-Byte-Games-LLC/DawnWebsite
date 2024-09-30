// src/components/Footer.js
import React from 'react';
import '../Styles/Footer.css'; // for styling

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>© 2024 Half Byte Games LLC. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://x.com/DawnOfficialHQ">Twitter</a>
                <a href="https://discord.gg/F6f7J357uX">Discord</a>
                <a href="https://www.youtube.com/@halfbytegamesllc5419">Youtube</a>
            </div>
        </footer>
    );
};

export default Footer;

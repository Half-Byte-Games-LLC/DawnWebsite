// src/components/Footer.js
import React from 'react';
import '../Styles/Footer.css'; // for styling

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>© 2024 Half Byte Games LLC. All Rights Reserved.</p>
            <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">Discord</a>
                <a href="#">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;

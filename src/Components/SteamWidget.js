import React from 'react';
import '../Styles/SteamWidget.css'; // Custom styling for the Steam widget

const SteamWidget = () => {
    return (
        <div className="steam-widget-section">
            <h2 className="steam-widget-title">Get D.A.W.N on Steam</h2>
            <iframe
                src="https://store.steampowered.com/widget/1938500/"
                frameBorder="0"
                width="646"
                height="190"
                title="Steam Widget"
            ></iframe>
        </div>
    );
};

export default SteamWidget;
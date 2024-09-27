import React from 'react';
import '../Styles/RoadMap.css'; // Custom styling for the roadmap

const roadmapStages = [
    {
        id: 1,
        title: "Stage 1: Foundations of Survival",
        patches: [
            { name: "Patch 1.0: First Blood", description: "Initial release, core zombie AI (Wretches), and basic player movement/combat.", releaseDate: "Q1 2024" },
            { name: "Patch 1.1: Adapt or Die", description: "Improved zombie AI, pathfinding, and player inventory system.", releaseDate: "Q2 2024" },
            { name: "Patch 1.2: Breaking Point", description: "Zombie variants (fast and tough Wretches) and ranged weapons for players.", releaseDate: "Q3 2024" },
            { name: "Patch 1.3: Defensive Measures", description: "Player traps, simple crafting, and early progression mechanics.", releaseDate: "Q4 2024" }
        ]
    },
    {
        id: 2,
        title: "Stage 2: The Hunter’s Call",
        patches: [
            { name: "Patch 2.0: Rise of the Hunters", description: "Hunters evolve from Wretches, introducing kill-based progression.", releaseDate: "Q1 2025" },
            { name: "Patch 2.1: Silent Stalkers", description: "Enhanced tracking for Hunters, player stats, and leaderboards.", releaseDate: "Q2 2025" },
            { name: "Patch 2.2: The Hunt Begins", description: "Advanced ranged combat for players, with improved tactical AI for Hunters.", releaseDate: "Q3 2025" },
            { name: "Patch 2.3: Echoes of Survival", description: "Event system implementation, with real-time notifications for key zombie/player actions.", releaseDate: "Q4 2025" }
        ]
    },
    // Add Stage 3, 4, and 5 here
];

const Roadmap = () => {
    return (
        <div className="roadmap-container">
            <h2 className="text-4xl font-bold mb-10">D.A.W.N Roadmap</h2>
            <div className="roadmap-timeline">
                {roadmapStages.map((stage) => (
                    <div key={stage.id} className="roadmap-item">
                        {/* Stage Icon */}
                        <div className="stage-icon">{stage.id}</div>

                        {/* Stage Title */}
                        <h3 className="stage-title">{stage.title}</h3>

                        {/* Patches */}
                        <div className="patch-grid">
                            {stage.patches.map((patch) => (
                                <div key={patch.name} className="relative group patch-card">
                                    <h4>{patch.name}</h4>
                                    <p>{patch.description}</p>

                                    {/* Tooltip for Release Date */}
                                    <div className="tooltip">
                                        Release Date: {patch.releaseDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;

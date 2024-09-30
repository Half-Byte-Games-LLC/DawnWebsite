import React from 'react';
import '../Styles/RoadMap.css'; // Custom styling for the roadmap

const roadmapStages = [
    {
        id: 1,
        title: "Stage 1: Foundations of Survival",
        patches: [
            { name: "Patch 1.0: First Blood", description: "Initial release, core zombie AI (Wretches), and basic player movement/combat.", releaseDate: "October 11, 2024" },
            { name: "Patch 1.1: Adapt or Die", description: "Improved zombie AI, pathfinding, and player inventory system.", releaseDate: "October 25, 2024" },
            { name: "Patch 1.2: Breaking Point", description: "Zombie variants (fast and tough Wretches) and ranged weapons for players.", releaseDate: "November 8, 2024" },
            { name: "Patch 1.3: Defensive Measures", description: "Player traps, simple crafting, and early progression mechanics.", releaseDate: "November 22, 2024" }
        ]
    },
    {
        id: 2,
        title: "Stage 2: The Hunter’s Call",
        patches: [
            { name: "Patch 2.0: Rise of the Hunters", description: "Hunters evolve from Wretches, introducing kill-based progression.", releaseDate: "December 6, 2024" },
            { name: "Patch 2.1: Silent Stalkers", description: "Enhanced tracking for Hunters, player stats, and leaderboards.", releaseDate: "December 20, 2024" },
            { name: "Patch 2.2: The Hunt Begins", description: "Advanced ranged combat for players, with improved tactical AI for Hunters.", releaseDate: "January 3, 2025" },
            { name: "Patch 2.3: Echoes of Survival", description: "Event system implementation, with real-time notifications for key zombie/player actions.", releaseDate: "January 17, 2025" }
        ]
    },
    {
        id: 3,
        title: "Stage 3: Ravagers of the Wastes",
        patches: [
            { name: "Patch 3.0: Ravager’s Wrath", description: "Ravagers emerge with the ability to break through defenses and remember player actions.", releaseDate: "January 31, 2025" },
            { name: "Patch 3.1: Hold the Line", description: "Player base defenses and advanced traps for dealing with Ravagers.", releaseDate: "February 14, 2025" },
            { name: "Patch 3.2: Memories of the Dead", description: "Tactical memory-based AI for Ravagers, allowing them to set ambushes.", releaseDate: "February 28, 2025" },
            { name: "Patch 3.3: Resourceful Resistance", description: "Advanced resource gathering and more complex traps for players.", releaseDate: "March 14, 2025" }
        ]
    },
    {
        id: 4,
        title: "Stage 4: Lords of the Horde",
        patches: [
            { name: "Patch 4.0: Alpha Ascendant", description: "Introduction of Alphas as horde leaders, boosting other zombies’ abilities.", releaseDate: "March 28, 2025" },
            { name: "Patch 4.1: March of the Juggernauts", description: "Juggernauts emerge, leading massive hordes and breaking through defenses.", releaseDate: "April 11, 2025" },
            { name: "Patch 4.2: The Reanimated Rise", description: "Reanimation system, where fallen zombies return with enhanced abilities.", releaseDate: "April 25, 2025" },
            { name: "Patch 4.3: Follow the Leader", description: "Leadership boosts for reanimated zombies when near Alphas or Juggernauts.", releaseDate: "May 9, 2025" }
        ]
    },
    {
        id: 5,
        title: "Stage 5: Endgame Awakening",
        patches: [
            { name: "Patch 5.0: Evolved Beyond Death", description: "Final evolution forms for zombies, with max-level Alphas and Juggernauts.", releaseDate: "May 23, 2025" },
            { name: "Patch 5.1: Nuclear Dawn", description: "Nuke activation system and extraction mechanics for players to escape.", releaseDate: "June 6, 2025" },
            { name: "Patch 5.2: The Final Test", description: "Endgame balancing, where players face the toughest evolved zombies.", releaseDate: "June 20, 2025" }
        ]
    }
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

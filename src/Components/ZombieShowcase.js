import React from 'react';
import '../Styles/ZombieShowcase.css'; // CSS for styling

const zombies = [
    {
        name: 'Wretch',
        level: 1,
        image: `${process.env.PUBLIC_URL}/Images/HighresScreenshot00000.png`,
        description: `
        Physical Appearance:
        - Gaunt and Emaciated: The Wretch is skeletal and weak-looking, with a decayed and malnourished body.
        - Sharp Claws: The Wretch has long, sharp claws despite its frailty.
        - Pale, Decayed Skin: Its skin is discolored and deteriorating.
        - Ragged Clothing: Minimal clothing, often torn and dirty.
        
        Behavior:
        - Basic AI: Relying on primal instincts like chasing and swarming.
        - Speed: Slow to moderate, but dangerous in groups.
        - Swarming: Tend to overpower players through sheer numbers.

        Abilities:
        - Chasing: Will chase players once detected.
        - Swarming: Becomes more dangerous in groups.
        - No Tactical Abilities.

        Role in Gameplay:
        - Basic Threat: The Wretch introduces players to zombie mechanics.

        Strengths:
        - Large Numbers and Persistence.

        Weaknesses:
        - Low Health and Limited Intelligence.
        `
    },
    { name: 'Hunter', level: 2, image: `${process.env.PUBLIC_URL}/Images/hunter.jpg` },
    { name: 'Ravager', level: 3, image: `${process.env.PUBLIC_URL}/Images/ravager.jpg` },
    // Add more zombie tiers as needed...
];

const ZombieShowcase = () => {
    return (
        <div className="zombie-showcase-container">
            <h2>Zombie Evolution Showcase</h2>
            <div className="zombie-grid">
                {zombies.map((zombie, index) => (
                    <div key={index} className="zombie-card">
                        <img src={zombie.image} alt={zombie.name} className="zombie-image" />
                        <h3>{zombie.name}</h3>
                        <p>Level {zombie.level}</p>
                        <div className="zombie-description">
                            <p>{zombie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ZombieShowcase;
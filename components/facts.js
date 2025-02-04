import { useState } from 'react';

export default function FactsAboutMe() {
    const [expandedFact, setExpandedFact] = useState(null);

    const facts = [
        { title: "Self-taught Musician + ", details: "I learned to play the guitar and piano by myself and am working to relearn the saxophone, an instrument I learned in Junior High" },
        { title: "Multilingual + ", details: "I can speak multiple languages fluently, including English, French but have also learned ASL (American Sign Language) and Spanish" },
        { title: "Animal Lover + ", details: "I adore animals, and have had a variety of pets: snakes, cats, dogs and mice" },
        { title: "Video Game Enjoyer + ", details: "I love the peace of immersive RPGs and also enjoy more action packed FPS and indie horror games " },
        { title: "Artist + ", details: "I enjoy painting, drawing, and digital art, using it as a way to relax and express myself" },
        { title: "Lover of MTG and DND + ", details: "I love playing Magic: The Gathering and Dungeons & Dragons with friends. Both games challenge my strategic thinking and spark creativity, making every session an exciting and rewarding experience" },
    ];

    const toggleFact = (index) => {
        setExpandedFact(expandedFact === index ? null : index);
    };

    return (
        <div>
            <h3>Random Facts About Me</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {facts.map((fact, index) => (
                    <li key={index} style={{ marginBottom: "1rem", cursor: "pointer" }}>
                        <div className="factTitle"
                            onClick={() => toggleFact(index)}
                            style={{
                                fontWeight: "bold",
                                color: "#E3B23C",
                                
                            }}
                        >
                            {fact.title}
                        </div>
                        {expandedFact === index && (
                            <div className="factDetails" style={{ marginTop: "0.5rem", color: "#FFFFC7" }}>
                                {fact.details}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import React, { useRef, useState, useEffect } from "react";

export default function Skills() {
    const skills = [
        { name: "JavaScript", imglink: "/img/javascript.svg", alt: "JavaScript Logo" },
        { name: "CSharp", imglink: "/img/csharp.svg", alt: "CSharp Logo" },
        { name: "SQL", imglink: "/img/SQL.svg", alt: "SQL Logo" },
        { name: "HTML", imglink: "/img/html5.svg", alt: "HTML Logo" },
        { name: "CSS", imglink: "/img/css.svg", alt: "CSS Logo" },
        { name: "React", imglink: "/img/react.svg", alt: "React Logo" },
        { name: "Blazor", imglink: "/img/blazor.svg", alt: "Blazor Logo" },
        { name: "MudBlazor", imglink: "/img/MudBlazor.svg", alt: "MudBlazor Logo" },
        { name: "Node", imglink: "/img/nodejs.svg", alt: "Node Logo" },
        { name: "Git", imglink: "/img/git.svg", alt: "Git Logo" },
        { name: "BootStrap", imglink: "/img/bootstrap.svg", alt: "Bootstrap Logo" },
    ];

    const environments = [
        { name: "Visual Studio", imglink: "/img/visualstudio.svg", alt: "Visual Studio Logo" },
        { name: "VSCode", imglink: "/img/vscode.svg", alt: "VSCode Logo" },
        { name: "SQL Server Management Studio", imglink: "/img/microsoftsqlserver.svg", alt: "SQL Server Logo" },
        { name: "Figma", imglink: "/img/figma.svg", alt: "Figma Logo" },
        { name: "LinqPad", imglink: "/img/linqpad.svg", alt: "LinqPad Logo" },
    ];

    const skillsContainerRef = useRef(null);
    const environmentsContainerRef = useRef(null);
    const [skillsScrollable, setSkillsScrollable] = useState(false);
    const [environmentsScrollable, setEnvironmentsScrollable] = useState(false);

    // Check if the container is scrollable
    const checkScrollable = (ref, setState) => {
        if (ref.current) {
            setState(ref.current.scrollWidth > ref.current.clientWidth);
        }
    };

    useEffect(() => {
        // Check scrollable state on mount
        checkScrollable(skillsContainerRef, setSkillsScrollable);
        checkScrollable(environmentsContainerRef, setEnvironmentsScrollable);

        // Check again on window resize
        const handleResize = () => {
            checkScrollable(skillsContainerRef, setSkillsScrollable);
            checkScrollable(environmentsContainerRef, setEnvironmentsScrollable);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollCarousel = (ref, direction) => {
        if (ref.current) {
            const scrollAmount = 300; // Adjust scroll distance
            ref.current.scrollLeft += direction * scrollAmount;
        }
    };

    const renderCarousel = (items, ref) => (
        <div
            ref={ref}
            style={{
                display: "flex",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                padding: "1rem 0",
                gap: "1rem",
                scrollbarWidth: "thin", // For Firefox
                scrollbarColor: "#E3B23C #3D314A", // Thumb and track colors for Firefox
            }}
            className="carouselContainer"
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        flex: "0 0 auto",
                        width: "100px", // Adjusted size
                        textAlign: "center",
                        color: "#3D314A",
                    }}
                >
                    <img
                        src={item.imglink}
                        alt={item.alt}
                        style={{
                            maxWidth: "80%", // Adjusted image size
                            height: "auto",
                            marginBottom: "0.5rem",
                        }}
                    />
                    <p style={{ fontSize: "0.8rem", margin: 0 }}>{item.name}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            {/* Skills Section */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
                <h2 style={{ color: "#3D314A", textAlign: "center" }}>Skills</h2>
                {skillsScrollable && (
                    <>
                        <button
                            onClick={() => scrollCarousel(skillsContainerRef, -1)}
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer",
                            }}
                        >
                            &#9664;
                        </button>
                        <button
                            onClick={() => scrollCarousel(skillsContainerRef, 1)}
                            style={{
                                position: "absolute",
                                right: "0",
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer",
                            }}
                        >
                            &#9654;
                        </button>
                    </>
                )}
                {renderCarousel(skills, skillsContainerRef)}
            </div>

            {/* Environments Section */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden", maxWidth: "600px", margin: "0 auto" }}>
                <h2 style={{ color: "#3D314A", textAlign: "center" }}>Environments</h2>
                {environmentsScrollable && (
                    <>
                        <button
                            onClick={() => scrollCarousel(environmentsContainerRef, -1)}
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer",
                            }}
                        >
                            &#9664;
                        </button>
                        <button
                            onClick={() => scrollCarousel(environmentsContainerRef, 1)}
                            style={{
                                position: "absolute",
                                right: "0",
                                top: "50%",
                                transform: "translateY(-50%)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer",
                            }}
                        >
                            &#9654;
                        </button>
                    </>
                )}
                {renderCarousel(environments, environmentsContainerRef)}
            </div>
        </div>
    );
}

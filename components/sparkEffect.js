import React, { useRef, useEffect } from 'react';

const SparkBackground = ({ children }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 0.5; // Smaller particles for subtle effect
                this.speedX = Math.random() * 1.5 - 0.75; // Slower movement
                this.speedY = Math.random() * 1.5 - 0.75;
                this.opacity = Math.random() * 0.6 + 0.4; // Semi-transparent
                this.color = this.randomThemeColor();
            }

            randomThemeColor() {
                // Colors from the theme
                const themeColors = [
                    getComputedStyle(document.documentElement).getPropertyValue('--accentColour').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--midColour').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--NeutralColour').trim(),
                ];
                return themeColors[Math.floor(Math.random() * themeColors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.size *= 0.98; // Shrinks slightly over time
                if (this.size < 0.2) this.size = 0; // Disappear when very small
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.hexToRGB(this.color)}, ${this.opacity})`;
                ctx.fill();
            }

            hexToRGB(hex) {
                const bigint = parseInt(hex.slice(1), 16);
                const r = (bigint >> 16) & 255;
                const g = (bigint >> 8) & 255;
                const b = bigint & 255;
                return `${r}, ${g}, ${b}`;
            }
        }

        const createParticle = (x, y) => {
            for (let i = 0; i < 1; i++) { // Reduced number of particles per mouse move
                particlesArray.push(new Particle(x, y));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.size <= 0) {
                    particlesArray.splice(index, 1);
                }
            });
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            createParticle(mouseX, mouseY);
        };

        // Attach the event listener to the window
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none', // Prevents interactions
                }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default SparkBackground;

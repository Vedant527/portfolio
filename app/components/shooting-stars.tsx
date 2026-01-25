"use client";

import React, { useEffect, useRef } from "react";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
    maxDistance: number;
    color: string;
}

export default function ShootingStars() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: ShootingStar[] = [];
        const STAR_COUNT = 1;
        const SPAWN_PROBABILITY = 0.01;

        // Hot Neon Palette
        const COLORS = [
            "80, 255, 255", // Neon Cyan
            "255, 80, 255", // Neon Magenta
            "100, 255, 100", // Neon Lime
            "255, 80, 20",   // Neon Orange/Red
        ];

        const createStar = (): ShootingStar => {
            const startX = Math.random() * (width * 0.5);
            const startY = height + 50;
            const angle = -Math.PI / 4 + (Math.random() * 0.2 - 0.1);
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            return {
                id: Math.random(),
                x: startX,
                y: startY,
                angle: angle,
                scale: Math.random() * 1 + 0.5, // Sized 0.5 - 1.5 (More variety)
                speed: Math.random() * 2 + 2, // Slow and majestic (2-4 px/frame)
                distance: 0,
                maxDistance: Math.random() * (height * 2) + width,
                color: color,
            };
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Critical for neon glow effect
            ctx.globalCompositeOperation = "lighter";

            if (stars.length < STAR_COUNT && Math.random() < SPAWN_PROBABILITY) {
                stars.push(createStar());
            }

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;
                star.distance += star.speed;

                const progress = star.distance / star.maxDistance;

                // Decoupled fade logic:
                // Head brightens quickly, stays steady, then shrinks/burns
                let headOpacity = 1;
                let scaleModifier = 1;

                if (progress < 0.1) {
                    headOpacity = progress * 10;
                } else if (progress > 0.8) {
                    // Burnout phase
                    const burnout = (progress - 0.8) * 5; // 0 to 1
                    headOpacity = 1 - burnout;
                    scaleModifier = 1 - (burnout * 0.5); // Shrink size to 50%
                }

                // Trail stays more opaque for longer, fading only at very end
                let trailOpacity = 0.8;
                if (progress > 0.9) {
                    trailOpacity = (1 - progress) * 10;
                }

                if (headOpacity <= 0) {
                    stars.splice(i, 1);
                    i--;
                    continue;
                }

                const currentScale = star.scale * scaleModifier;

                ctx.save();
                ctx.translate(star.x, star.y);
                ctx.rotate(star.angle);

                // Trail GLOW (Wider and softer)
                const trailLength = 200 * currentScale;
                const gradient = ctx.createLinearGradient(0, 0, -trailLength, 0);
                gradient.addColorStop(0, `rgba(${star.color}, ${trailOpacity})`);
                gradient.addColorStop(0.5, `rgba(${star.color}, ${trailOpacity * 0.5})`);
                gradient.addColorStop(1, `rgba(${star.color}, 0)`);

                ctx.fillStyle = gradient;

                // Draw Trail
                ctx.beginPath();
                ctx.moveTo(0, 0); // Start exact center
                ctx.lineTo(-trailLength, -1 * currentScale); // Very thin tail
                ctx.lineTo(-trailLength, 1 * currentScale);
                ctx.closePath();
                ctx.fill();

                // Draw Head (Intense Bloom)
                ctx.shadowBlur = 40; // Massive glow
                ctx.shadowColor = `rgba(${star.color}, 1)`;
                ctx.fillStyle = `rgba(255, 255, 255, ${headOpacity})`; // White hot core always

                ctx.beginPath();
                ctx.arc(0, 0, 1.5 * currentScale, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();

                if (star.y < -500 || star.x > width + 500) {
                    stars.splice(i, 1);
                    i--;
                }
            }

            // Reset compostion for next frame clear (though clearRect usually handles it, good practice)
            ctx.globalCompositeOperation = "source-over";
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}

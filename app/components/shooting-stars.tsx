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
        const STAR_COUNT = 2;
        const SPAWN_PROBABILITY = 0.015;

        // Space Neon Palette (Weighted)
        const COLORS = [
            "120, 100, 255", // Neon Purple
            "100, 50, 255",  // Deep Neon Purple
            "60, 100, 255",  // Neon Dark Blue
            "80, 180, 255",  // Neon Light Blue
            "180, 80, 255",  // Neon Lavender
            "140, 60, 255",  // Vivid Purple
            "0, 255, 160",   // Neon Seafoam Green (Rare)
            "0, 255, 160",   // Neon Seafoam Green (Rare)
            "255, 120, 30",  // Neon Orange (Very Rare)
        ];

        const createStar = (): ShootingStar => {
            const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
            let x = 0, y = 0, angle = 0;
            let targetX = 0, targetY = 0;
            const buffer = 50;

            if (side === 0) { // Top
                x = Math.random() * width;
                y = -buffer;
                // Aim for bottom half
                const targetX = Math.random() * width;
                const targetY = height + buffer;
                angle = Math.atan2(targetY - y, targetX - x);
            } else if (side === 1) { // Right
                x = width + buffer;
                y = Math.random() * height;
                // Aim for left side
                const targetX = -buffer;
                const targetY = Math.random() * height;
                angle = Math.atan2(targetY - y, targetX - x);
            } else if (side === 2) { // Bottom
                x = Math.random() * width;
                y = height + buffer;
                // Aim for top half
                const targetX = Math.random() * width;
                const targetY = -buffer;
                angle = Math.atan2(targetY - y, targetX - x);
            } else if (side === 3) { // Left
                x = -buffer;
                y = Math.random() * height;
                // Aim for right side
                targetX = width + buffer;
                targetY = Math.random() * height;
                angle = Math.atan2(targetY - y, targetX - x);
            }

            // Weighted speed: 10% really fast (15-25), 90% steady/majestic (2-7)
            const speed = Math.random() < 0.1
                ? Math.random() * 10 + 15
                : Math.random() * 5 + 2;

            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            // Calculate distance to target to ensure strict lifecycle
            const travelDist = Math.hypot(targetX - x, targetY - y);

            return {
                id: Math.random(),
                x,
                y,
                angle,
                scale: Math.random() * 1 + 0.5, // 0.5 - 1.5
                speed,
                distance: 0,
                // Lifecycle: Cleanly fade out AFTER crossing the screen (travelDist)
                // Add a buffer so it doesn't fade right at the edge
                maxDistance: travelDist + 300,
                color,
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

                // Decoupled fade logic
                let headOpacity = 1;
                let scaleModifier = 1;

                if (progress < 0.05) {
                    // Quick fade in
                    headOpacity = progress * 20;
                }
                // REMOVED: Fade out logic

                // Trail stays more opaque
                let trailOpacity = headOpacity * 0.8;

                if (headOpacity <= 0) {
                    stars.splice(i, 1);
                    i--;
                    continue;
                }

                const currentScale = star.scale * scaleModifier;

                ctx.save();
                ctx.translate(star.x, star.y);
                ctx.rotate(star.angle);

                // Trail GLOW
                const trailLength = 200 * currentScale;

                const gradient = ctx.createLinearGradient(0, 0, -trailLength, 0);
                gradient.addColorStop(0, `rgba(${star.color}, ${trailOpacity})`);
                gradient.addColorStop(0.5, `rgba(${star.color}, ${trailOpacity * 0.5})`);
                gradient.addColorStop(1, `rgba(${star.color}, 0)`);

                ctx.fillStyle = gradient;

                // Draw Trail
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-trailLength, -1 * currentScale);
                ctx.lineTo(-trailLength, 1 * currentScale);
                ctx.closePath();
                ctx.fill();

                // Draw Head
                ctx.shadowBlur = 40;
                ctx.shadowColor = `rgba(${star.color}, 1)`;
                ctx.fillStyle = `rgba(255, 255, 255, ${headOpacity})`;

                ctx.beginPath();
                ctx.arc(0, 0, 1.5 * currentScale, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();

                // Robust 4-sided boundary check with large buffer
                if (star.x < -500 || star.x > width + 500 || star.y < -500 || star.y > height + 500) {
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

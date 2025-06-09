import React, { useEffect, useRef } from "react";

const DoublePendulum: React.FC = () => {
    const trailRef = useRef<HTMLCanvasElement | null>(null);
    const rodsRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const trailCanvas = trailRef.current as HTMLCanvasElement;
        const rodsCanvas = rodsRef.current as HTMLCanvasElement;
        const trailCtx = trailCanvas.getContext("2d")!;
        const rodsCtx = rodsCanvas.getContext("2d")!;
        const DPR = window.devicePixelRatio || 1;

        const updateCanvasSize = () => {
            const { innerWidth: w, innerHeight: h } = window;
            [trailCanvas, rodsCanvas].forEach((c) => {
                c.width = w * DPR;
                c.height = h * DPR;
                c.style.width = `${w}px`;
                c.style.height = `${h}px`;
            });
            trailCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
            rodsCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        const g = 10;
        const m1 = 1;
        const m2 = 1;
        let L1 = Math.min(window.innerWidth, window.innerHeight) * 0.48;
        let L2 = L1 * 0.65;

        let a1 = Math.random() * Math.PI + Math.PI / 2;
        let a2 = Math.random() * Math.PI + Math.PI / 2;
        let a1_v = 0;
        let a2_v = 0;

        const speedFactor = 10;

        let lastTime = performance.now();
        let rafId: number;

        let color = 0;
        let colorChange = 0.001;

        trailCtx.fillStyle = "#000";
        trailCtx.fillRect(0, 0, trailCanvas.width / DPR, trailCanvas.height / DPR);

        let prevX2: number | null = null;
        let prevY2: number | null = null;

        const step = () => {
            const now = performance.now();
            let dt = (now - lastTime) / 1000;
            lastTime = now;
            dt *= speedFactor;

            const sin = Math.sin;
            const cos = Math.cos;

            const num1 = -g * (2 * m1 + m2) * sin(a1);
            const num2 = -m2 * g * sin(a1 - 2 * a2);
            const num3 = -2 * sin(a1 - a2) * m2 * (a2_v ** 2 * L2 + a1_v ** 2 * L1 * cos(a1 - a2));
            const den1 = L1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
            const a1_a = (num1 + num2 + num3) / den1;

            const num4 = 2 * sin(a1 - a2);
            const num5 = a1_v ** 2 * L1 * (m1 + m2);
            const num6 = g * (m1 + m2) * cos(a1);
            const num7 = a2_v ** 2 * L2 * m2 * cos(a1 - a2);
            const den2 = L2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
            const a2_a = (num4 * (num5 + num6 + num7)) / den2;

            a1_v += a1_a * dt;
            a2_v += a2_a * dt;

            a1 += a1_v * dt;
            a2 += a2_v * dt;

            const originX = rodsCanvas.width / (2 * DPR);
            const originY = (rodsCanvas.height / (2 * DPR)) * 0.4;
            const x1 = originX + L1 * sin(a1);
            const y1 = originY + L1 * cos(a1);
            const x2 = x1 + L2 * sin(a2);
            const y2 = y1 + L2 * cos(a2);

            color += colorChange;
            if (color > 1 || color < 0) {
                colorChange *= -1;
                color = Math.max(0, Math.min(1, color));
            }
            const rColor = Math.floor(255 * color);
            const gColor = Math.floor(255 * (1 - color));
            const bColor = Math.floor(255 * (0.5 - Math.abs(color - 0.5)) * 2);

            const rgb = `rgb(${rColor},${gColor},${bColor})`;
            document.documentElement.style.setProperty("--pendulum-color", rgb);

            trailCtx.fillStyle = "rgba(0,0,0,0.01)";
            trailCtx.fillRect(0, 0, trailCanvas.width / DPR, trailCanvas.height / DPR);

            if (prevX2 !== null && prevY2 !== null) {
                trailCtx.strokeStyle = rgb;
                trailCtx.lineWidth = 5;
                trailCtx.beginPath();
                trailCtx.moveTo(prevX2, prevY2);
                trailCtx.lineTo(x2, y2);
                trailCtx.stroke();
            }
            prevX2 = x2;
            prevY2 = y2;

            rodsCtx.clearRect(0, 0, rodsCanvas.width / DPR, rodsCanvas.height / DPR);

            rodsCtx.strokeStyle = "#aaa";
            rodsCtx.lineWidth = 1.5;
            rodsCtx.beginPath();
            rodsCtx.moveTo(originX, originY);
            rodsCtx.lineTo(x1, y1);
            rodsCtx.lineTo(x2, y2);
            rodsCtx.stroke();

            rodsCtx.fillStyle = `rgb(${rColor * 0.7},${gColor * 0.7},${bColor * 0.7})`;
            rodsCtx.beginPath();
            rodsCtx.arc(originX, originY, 4, 0, Math.PI * 2);
            rodsCtx.fill();
            rodsCtx.beginPath();
            rodsCtx.arc(x1, y1, 4, 0, Math.PI * 2);
            rodsCtx.fill();
            rodsCtx.beginPath();
            rodsCtx.arc(x2, y2, 4, 0, Math.PI * 2);
            rodsCtx.fill();

            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);

        const handleResize = () => {
            L1 = Math.min(window.innerWidth, window.innerHeight) * 0.48;
            L2 = L1 * 0.65;
            updateCanvasSize();
        };

        window.addEventListener("resize", handleResize);

        const handleVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(rafId);
            } else {
                lastTime = performance.now();
                rafId = requestAnimationFrame(step);
            }
        };

        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <>
            <canvas ref={trailRef} className="absolute inset-0 pointer-events-none select-none" />
            <canvas ref={rodsRef} className="absolute inset-0 pointer-events-none select-none" />
        </>
    );
};

export default DoublePendulum;

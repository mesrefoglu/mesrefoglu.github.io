// ─── Projects.tsx ──────────────────────────────────────────────────
type Project = {
    name: string;
    explanation: string;
    link: string;
    logo: string;
    stack: string[];
};

const projects: Project[] = [
    {
        name: "Spinometry",
        explanation: "Android incremental/idle game.",
        link: "https://play.google.com/store/apps/details?id=com.qedized.spinometry",
        logo: "/logos/spinometry.png",
        stack: ["Unity", "C#", "Android", "Google Play API"],
    },
    {
        name: "AI Motorcycle Recommender",
        explanation: "A web app that recommends motorcycles based on user preferences.",
        link: "https://mesrefoglu.github.io/motorcycle-ai/",
        logo: "/logos/motorcycle-ai.png",
        stack: ["HTML", "TypeScript", "React", "Node.js", "Tailwind CSS"],
    },
    {
        name: "Weather Forecast App",
        explanation: "A web app that provides weather forecasts for any location.",
        link: "https://mesrefoglu.github.io/weather-forecast-app/",
        logo: "/logos/weather.png",
        stack: ["HTML", "JavaScript", "React", "Node.js", "Tailwind CSS", "OpenWeatherMap API"],
    },
    {
        name: "3D Ray Tracer",
        explanation: "A 3D ray tracer that renders 3D scenes using pure C++.",
        link: "https://github.com/mesrefoglu/3DRayTracer",
        logo: "/logos/ray-tracer.png",
        stack: ["C++"],
    },
    {
        name: "OSBot",
        explanation: "A Discord bot that provides various utilities and features.",
        link: "https://github.com/mesrefoglu/OSBot",
        logo: "/logos/osbot.png",
        stack: ["JavaScript", "Node.js", "Discord.js"],
    },
    {
        name: "Crosshair Overlay",
        explanation: "A very simple crosshair overlay application.",
        link: "https://github.com/mesrefoglu/Crosshair",
        logo: "/logos/crosshair.png",
        stack: ["Windows Forms", "C#"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center w-full py-20">
            <h2 className="mb-16 text-5xl font-bold tracking-tight">Projects</h2>

            <div className="grid w-full max-w-6xl gap-10 grid-cols-2">
                {projects.map((p, idx) => (
                    <a
                        key={idx}
                        href={p.link}
                        target="_blank"
                        className="rounded-lg border-2 border-white/50 p-6 hover:border-[var(--pendulum-color)] hover:bg-white/5"
                    >
                        <img src={p.logo} alt={`${p.name} logo`} className="mx-auto mb-6 h-20 w-20 rounded-full" />
                        <h3 className="mb-4 text-center text-xl font-semibold text-white">{p.name}</h3>
                        <p className="mt-3 mb-4 text-center text-sm text-gray-300">{p.explanation}</p>
                        <ul className="flex flex-wrap justify-center gap-2">
                            {p.stack.map((tech, i) => (
                                <li
                                    key={i}
                                    className="rounded border border-pendulum bg-white/5 px-2 py-0.5 text-xs text-gray-200 group-hover:border-pendulum"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </a>
                ))}
            </div>
        </section>
    );
}

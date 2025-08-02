type Experience = {
    role: string;
    company: string;
    period: string;
    logo: string;
    bullets: string[];
};
const data: Experience[] = [
    {
        role: "Software Engineer",
        company: "DoorDash",
        period: "Aug 2025 — Present",
        logo: "/logos/doordash.png",
        bullets: ["Recently joined the DoorDash team as a Software Engineer."],
    },
    {
        role: "Founder/Game Developer",
        company: "Qedized Games",
        period: "Jan 2024 — Present",
        logo: "/logos/qedized.png",
        bullets: [
            "Published an idle game (Spinometry) on Google Play Store with 10k+ downloads.",
            "Currently developing a 2D roguelike game (A Universe Infinite) with procedural generation.",
        ],
    },
    {
        role: "Unity AR/XR Developer",
        company: "Mawari",
        period: "Sept 2024 — Dec 2024",
        logo: "/logos/mawari.png",
        bullets: [
            "Developed XR/AR applications in Unity (C#) with OpenXR, ARCore, and ARKit.",
            "Implemented custom mathematical algorithms for advanced functionality.",
            "Designed demo apps & UIs for Quest 3, Magic Leap 2, XReal, and Apple Vision Pro.",
            "Harnessed compute shaders to move calculations to the GPU, boosting FPS ≈ 2.5×.",
            "Created Bash/Shell automation to speed up testing by 4-5×.",
        ],
    },
    {
        role: "Backend Engineer",
        company: "Faire",
        period: "Jan 2023 — Dec 2023",
        logo: "/logos/faire.png",
        bullets: [
            "Owned a project with ≈ $0.7 M annual impact as the directly responsible engineer.",
            "Kept stakeholders up-to-date through regular written & verbal communication.",
            "Architected backend features in Kotlin/Java: email compilers, backfills, events, jobs.",
            "Built 20+ RESTful API endpoints in Kotlin for the front-end.",
            "Reviewed and provided feedback on 50+ pull requests.",
        ],
    },
    {
        role: "Instructional Support Assistant (CS 115)",
        company: "University of Waterloo",
        period: "Sept 2021 — Dec 2021",
        logo: "/logos/uwaterloo.png",
        bullets: [
            "Held 30+ office-hour sessions to answer student questions.",
            "Maintained daily & weekly communication with team and supervisors.",
            "Marked 150+ assignments, providing detailed, constructive feedback.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-18 items-center justify-center flex flex-col">
            <h2 className="mb-16 text-5xl font-bold tracking-tight">Experience</h2>

            <div className="space-y-12">
                {data.map((item, idx) => (
                    <>
                        <div className="relative flex items-center gap-8" key={idx}>
                            {idx % 2 ? (
                                <img src={item.logo} alt={item.company + " logo"} className="h-40 w-40" />
                            ) : (
                                <></>
                            )}
                            <div className={"relative " + (idx % 2 ? "flex-none ml-auto" : "flex-1")}>
                                <article key={idx} className="text-left">
                                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                                    <p className="mt-0.5 text-lg text-gray-400">
                                        {item.company} • {item.period}
                                    </p>

                                    <ul className="mt-3 space-y-1 pl-5 text-md text-gray-300">
                                        {item.bullets.map((line, i) => (
                                            <li key={i}>{"• " + line}</li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                            {idx % 2 ? (
                                <></>
                            ) : (
                                <img src={item.logo} alt={item.company + " logo"} className="h-40 w-40" />
                            )}
                        </div>
                        {idx !== data.length - 1 && <div className="w-full h-[0.01em] bg-white" />}
                    </>
                ))}
            </div>
        </section>
    );
}

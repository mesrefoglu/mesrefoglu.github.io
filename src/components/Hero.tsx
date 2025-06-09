export default function Hero() {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl text-pendulum">
                Liam Mesrefoglu
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-2xl">Problem Solving Engineer</p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <a href="#experience" className="bg-pendulum rounded-md px-8 py-3 text-lg font-semibold text-black">
                    Experience
                </a>
                <a href="#projects" className="bg-pendulum rounded-md px-8 py-3 text-lg font-semibold text-black">
                    Projects
                </a>
                <a
                    href="mailto:mesrefoglu@gmail.com"
                    className="rounded-md border border-gray-400 px-8 py-3 text-lg font-semibold text-gray-100 transition-colors hover:bg-gray-700"
                >
                    Contact
                </a>
            </div>
        </section>
    );
}

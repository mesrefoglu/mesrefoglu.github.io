// ─── Footer.tsx ────────────────────────────────────────────────────
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 text-gray-400">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
                <p className="text-sm">© {year} Mustafa Mesrefoglu. All rights reserved.</p>

                <div className="flex items-center gap-8">
                    <a
                        href="https://www.linkedin.com/in/mesrefoglu"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="transition hover:text-[var(--pendulum-color)]"
                    >
                        <svg viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
                            <title>LinkedIn</title>
                            <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/mesrefoglu"
                        target="_blank"
                        aria-label="GitHub"
                        className="transition hover:text-[var(--pendulum-color)]"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 fill-current"
                        >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="rounded border border-white/20 px-3 py-1 text-sm transition hover:border-pendulum hover:text-[var(--pendulum-color)]"
                    >
                        Résumé
                    </a>
                    <a href="#top" className="hidden text-sm transition hover:text-[var(--pendulum-color)] sm:block">
                        ↑ Top
                    </a>
                </div>
            </div>
        </footer>
    );
}

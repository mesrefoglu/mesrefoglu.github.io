import { useState } from "react";
import avatar from "/avatar.jpg";

export default function Header() {
    const [open, setOpen] = useState(false);

    // Helper to close the menu after a click (nice on mobile)
    const close = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-30 flex h-20 items-center px-4 backdrop-blur-xs">
            <div className="flex items-center gap-3">
                <a href="/avatar.jpg" target="_blank" className="h-12 w-12 overflow-hidden rounded-full">
                    <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
                </a>
                <span className="text-2xl font-semibold">Liam Mesrefoglu</span>
            </div>

            <div
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[6px] cursor-pointer md:hidden"
            >
                <span
                    className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`}
                />
                <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                    className={`h-0.5 w-6 bg-current transition-transform ${
                        open ? "-translate-y-[8px] -rotate-45" : ""
                    }`}
                />
            </div>

            <nav className="ml-auto hidden items-center gap-10 md:flex">
                <a href="https://www.linkedin.com/in/mesrefoglu" target="_blank" aria-label="LinkedIn">
                    <svg
                        height="32"
                        viewBox="0 0 382 382"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 fill-current"
                    >
                        <title>LinkedIn</title>
                        <path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zm-31.459-206.412c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.207 40.666-40.666 40.666zM341.91 330.654c0 5.106-4.14 9.246-9.246 9.246H286.73c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246V149.593c0-5.106 4.14-9.246 9.246-9.246h44.426c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z" />
                    </svg>
                </a>

                <a href="https://github.com/mesrefoglu" target="_blank" aria-label="GitHub">
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 fill-current"
                    >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-3 rounded-md border px-3 py-1 text-lg transition-colors hover:border-gray-500 hover:bg-gray-700"
                >
                    <svg
                        role="img"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-current"
                    >
                        <title>Résumé</title>
                        <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
                        <path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
                        <path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
                    </svg>
                    Résumé
                </a>
            </nav>

            <nav
                className={`absolute left-0 top-full w-full origin-top backdrop-blur-xs duration-200 md:hidden ${
                    open ? "scale-y-100" : "scale-y-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 text-xl">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mesrefoglu"
                            target="_blank"
                            aria-label="LinkedIn"
                            onClick={close}
                            className="flex items-center gap-3"
                        >
                            <svg
                                height="32"
                                viewBox="0 0 382 382"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 fill-current"
                            >
                                <title>LinkedIn</title>
                                <path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zm-31.459-206.412c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.207 40.666-40.666 40.666zM341.91 330.654c0 5.106-4.14 9.246-9.246 9.246H286.73c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246V149.593c0-5.106 4.14-9.246 9.246-9.246h44.426c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z" />
                            </svg>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/mesrefoglu"
                            target="_blank"
                            aria-label="GitHub"
                            onClick={close}
                            className="flex items-center gap-3"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 fill-current"
                            >
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.78-.685-1.208-1.623-1.208-1.623-1.054-.721.08-.708.08-.708 1.165.083 1.784 1.197 1.784 1.197 1.037 1.777 2.724 1.264 3.392.967.104-.746.406-1.264.74-1.564-2.666-.305-5.469-1.332-5.469-5.93 0-1.31.473-2.38 1.236-3.22-.13-.303-.536-1.523.108-3.176 0 0 1.008-.322 3.295 1.23a11.544 11.544 0 0 1 2.99-.405c1.018.006 2.042.138 3.002.405 2.276-1.552 3.285-1.23 3.285-1.23.646 1.653.241 2.873.121 3.176.767.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.478 5.92.422.363.813 1.096.813 2.215 0 1.6-.015 2.885-.015 3.273 0 .317.22.694.832.575C20.565 22.092 24 17.593 24 12.297 24 5.373 18.627 0 12 0" />
                            </svg>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            onClick={close}
                            className="flex items-center gap-3 rounded-md border px-3 py-1 transition-colors hover:border-gray-500 hover:bg-gray-700"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 128 128"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 fill-current"
                            >
                                <title>Résumé</title>
                                <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" />
                                <path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" />
                                <path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
                            </svg>
                            Résumé
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

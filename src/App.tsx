import "./App.css";

import DoublePendulum from "./components/DoublePendulum";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <DoublePendulum />

            <Header />
            <Hero />

            <Experience />
            <Projects />

            <Footer />
        </>
    );
}

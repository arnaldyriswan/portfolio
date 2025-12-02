import { AboutMe } from "../components/AboutMe"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import SkillSection from "../components/SkillSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />

            <StarBackground />

            <Navbar />

            <main>
                <HeroSection />
                <AboutMe />
                <SkillSection />
                <ProjectSection />
            </main>

        </div>
    )
}
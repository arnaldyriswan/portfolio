import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light")

        };
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);

        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")  
            setIsDarkMode(true);

        }
    }
    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed bottom-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
                "bg-secondary hover:bg-primary/10 shadow-md hover:shadow-lg",
                "border border-primary/20 hover:border-primary/40",
                "flex items-center justify-center",
                "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-400" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-600" />
                )}
            </div>
        </button>
    )
}
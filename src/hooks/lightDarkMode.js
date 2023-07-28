import { useState } from "react";

export default function useLightDarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    function toggleTheme() {
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    return {theme, toggleTheme}
}
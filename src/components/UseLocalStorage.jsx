import { useEffect, useState } from "react"

const useThemeStorage = (theme, lightOrDark) => {
    
    const [thetheme, setThetheme] = useState(() => {
        let currentTheme;

        try {
            currentTheme = JSON.parse(localStorage.getItem(theme) ||String(lightOrDark))
        } catch (error) {
            console.log(error)
            currentTheme = lightOrDark
        }
        return currentTheme
    })

    useEffect(() => {
        localStorage.setItem(theme, JSON.stringify(thetheme))
    }, [theme, thetheme])

    return [thetheme, setThetheme]
}
export default useThemeStorage
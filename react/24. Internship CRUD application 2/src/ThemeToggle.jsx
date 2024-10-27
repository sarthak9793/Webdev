import {MdDarkMode} from "react-icons/md"
import {SiDarkreader} from "react-icons/si"
import {FiSun} from "react-icons/fi"
import {HiMoon} from "react-icons/hi"
import { useState } from "react"
import { useThemeContext } from "./context/ThemeContext"

export default function ThemeToggle(){
    const {theme, setTheme} = useThemeContext()
    const handleClick = () => {
        if(theme==="light")
            setTheme("dark")
        else
            setTheme("light")
    }
    return(
        <label className="flex items-center gap-x-1 label cursor-pointer font-bold" >
            {theme!=="dark" && <span className="label-text flex items-center text-lg gap-x-1" onClick={handleClick}><HiMoon size={25} />Dark Mode</span> }
            {theme==="dark" && <span className="label-text text-white flex items-center text-lg gap-x-1" onClick={handleClick}><FiSun size={25} color="white" />Light Mode</span> }
        </label>
    )
}
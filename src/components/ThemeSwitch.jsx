"use client"

import { MdLightMode, MdDarkMode  } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'systemTheme' ? systemTheme : theme;
  
  useEffect(() =>{ setMounted(true)}, [])
 if (!mounted) {
    return null
  }
  
  return (
    <div>
      {mounted && 
        (currentTheme === 'dark' ? 
          (<MdLightMode className="text-xl cursor-pointer hover:text-amber-500 
          " onClick={() => setTheme('light')} /> ) : (
          <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500 
          " onClick={() => setTheme('dark')} />)
      )}
    </div>
  )
};

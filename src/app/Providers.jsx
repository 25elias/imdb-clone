'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class' >
      <div className="dark:bg-gray-700
      min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  )
}

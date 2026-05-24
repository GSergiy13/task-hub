'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div className='fixed bottom-5 right-5'>
			<button
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				className='p-2 rounded-full dark:text-white text-neutral-800 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200 cursor-pointer'
			>
				{theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
			</button>
		</div>
	)
}

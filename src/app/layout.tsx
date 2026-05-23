import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
	},
	title: {
		absolute: 'Task Manager',
		template: '%s | Task Manager',
	},
	description:
		'A task management application built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${geistSans.variable}  h-full antialiased`}>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}

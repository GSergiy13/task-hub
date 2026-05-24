import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
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
		<html
			lang='en'
			className={`${poppins.variable}  h-full antialiased`}
			suppressHydrationWarning
		>
			<body className='min-h-full flex flex-col'>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

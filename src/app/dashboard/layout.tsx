import Sidebar from '@/components/layout/sidebar/Sidebar'
import type { ReactNode } from 'react'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='flex'>
			<Sidebar />

			<main className='flex-1 p-4'>{children}</main>
		</div>
	)
}

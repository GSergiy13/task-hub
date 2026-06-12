import type { ReactNode } from 'react'

import { Sidebar } from '@/components/layout/sidebar/Sidebar'

interface Props {
	children: ReactNode
	modals: ReactNode
}

export default function DashboardLayout({ children, modals }: Readonly<Props>) {
	return (
		<div className='grid min-h-screen grid-cols-[250px_1fr]'>
			<Sidebar />

			<main className='p-5'>{children}</main>
			{modals}
		</div>
	)
}

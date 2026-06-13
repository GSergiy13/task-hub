'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SidebarProjects } from './SidebarProjects'
import { authStore } from '@/stores/auth.store'
import { LogOut } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { PublicPages } from '@/config/public-pages'

export const Sidebar = observer(() => {
	const router = useRouter()

	return (
		<nav className='min-h-screen bg-white p-5 dark:bg-neutral-900'>
			{authStore.isLoggedIn && (
				<div className='relative'>
					<SidebarHeading title='Account' />
					<SidebarProfile />

					<Button
						className='absolute top-0 right-0 -translate-y-2 bg-gray-300 p-0.5'
						onClick={() => {
							authStore.logout()
							router.push(PublicPages.LOGIN)
						}}
					>
						<LogOut size={14} />
					</Button>
				</div>
			)}

			<SidebarHeading title='Main Menu' />

			<SidebarMenu />

			<SidebarHeading title='Projects' />

			<SidebarProjects />
		</nav>
	)
})

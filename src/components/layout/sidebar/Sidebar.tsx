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

	const handleLogout = () => {
		authStore.logout()
		router.push(PublicPages.LOGIN)
	}

	return (
		<nav className='min-h-screen bg-white p-5 dark:bg-neutral-900'>
			{authStore.isLoggedIn && (
				<>
					<SidebarHeading title='Account' />
					<SidebarProfile />

					<Button onClick={handleLogout}>
						<LogOut />
					</Button>
				</>
			)}

			<SidebarHeading title='Main Menu' />

			<SidebarMenu />

			<SidebarHeading title='Projects' />

			<SidebarProjects />
		</nav>
	)
})

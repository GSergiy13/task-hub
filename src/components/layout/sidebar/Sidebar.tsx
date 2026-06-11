'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SidebarProjects } from './SidebarProjects'

export default function Sidebar() {
	return (
		<nav className='min-h-screen bg-white p-5 dark:bg-neutral-900'>
			<SidebarHeading title='Account' />

			<SidebarProfile />

			<SidebarHeading title='Main Menu' />

			<SidebarMenu />

			<SidebarHeading title='Projects' />

			<SidebarProjects />
		</nav>
	)
}

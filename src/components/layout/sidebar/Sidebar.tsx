'use client'

import dynamic from 'next/dynamic'
import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SidebarProjects } from './SidebarProjects'

export default function Sidebar() {
	return (
		<nav className='p-5 bg-white dark:bg-neutral-900 h-screen '>
			<SidebarHeading title='Account' />

			<SidebarProfile />

			<SidebarHeading title='Main Menu' />

			<SidebarMenu />

			<SidebarHeading title='Projects' />

			<SidebarProjects />
		</nav>
	)
}

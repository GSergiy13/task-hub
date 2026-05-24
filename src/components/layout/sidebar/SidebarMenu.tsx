import Link from 'next/link'
import { MAIN_MENU } from './data/main-menu.data'

export const SidebarMenu = () => {
	return (
		<nav className='mb-10 mt-3'>
			<ul className='space-y-4'>
				{MAIN_MENU.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className='flex items-center justify-between gap-2 text-neutral-500 dark:text-white hover:text-neutral-900 transition-colors pl-2  hover:dark:text-primary'
						>
							<div className='flex items-center gap-2'>
								<item.icon size={20} />
								<span>{item.label}</span>
							</div>

							{item.label === 'Messages' && (
								<span className='text-primary bg-[#dcdef6] rounded-lg px-2 text-xs font-medium dark:bg-[#4c4c4c] dark:text-white'>
									4
								</span>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

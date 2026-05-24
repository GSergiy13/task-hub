import { ChevronDown } from 'lucide-react'
import { PROFILE } from './data/profile.data'

export const SidebarProfile = () => {
	return (
		<div className='flex items-center gap-2.5 mb-6 cursor-pointer'>
			<div className='w-7 h-7 bg-primary rounded-full shrink-0' />

			<div className=' leading-snug'>
				<div className='font-medium'>{PROFILE.name}</div>
				<div className='opacity-50 text-xs font-medium'>{PROFILE.email}</div>
			</div>

			<div className='ml-1'>
				<ChevronDown size={16} className='opacity-50' />
			</div>
		</div>
	)
}

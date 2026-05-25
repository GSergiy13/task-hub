'use client'

import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'
import { ProjectStats } from './project-stats/ProjectStats'

export const ClientDashboard = () => {
	return (
		<div className='grid grid-cols-[2.7fr_1fr]'>
			<div>
				<div className='flex justify-between w-full mb-6'>
					<Heading>Dashboard</Heading>

					<SearchField value='' onChange={() => {}} />
				</div>

				<div className='grid grid-cols-[35%_65%] gap-6'>
					<ProjectStats />

					<div>Chart</div>
				</div>
			</div>

			<div className='p-5 h-screen flex justify-center items-center '>Chat</div>
		</div>
	)
}

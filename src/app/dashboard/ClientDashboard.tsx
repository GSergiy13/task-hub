'use client'

import { LastTasks } from './last-tasks/LastTasks'
import { ProjectChart } from './project-chart/ProjectChart'
import { ProjectStats } from './project-stats/ProjectStats'

import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'

export const ClientDashboard = () => {
	return (
		<div className='grid grid-cols-[2.7fr_1fr]'>
			<div>
				<div className='mb-6 flex w-full justify-between'>
					<Heading>Dashboard</Heading>

					<SearchField
						value=''
						onChange={() => {}}
					/>
				</div>

				<div className='mb-7 grid grid-cols-[35%_65%] gap-4'>
					<ProjectStats />

					<ProjectChart />
				</div>

				<LastTasks />
			</div>

			<div className='flex h-screen items-center justify-center p-5'>Chat</div>
		</div>
	)
}

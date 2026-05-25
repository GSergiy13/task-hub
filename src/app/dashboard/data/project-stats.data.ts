import type { IProjectStats } from '../project-stats/project-stats.type'

export const PROJECT_STATS_DATA: IProjectStats[] = [
	{
		id: 1,
		number: 92,
		label: 'Active Projects',
		bgColor: 'bg-violet-200',
		icon: '/icons/project-stats/active-projects.svg',
	},
	{
		id: 2,
		number: 34,
		label: 'On Going Projects',
		bgColor: 'bg-yellow-300',
		icon: '/icons/project-stats/ongoing-projects.svg',
	},
	{
		id: 3,
		number: 1270,

		label: 'Working Hours',
		bgColor: 'bg-pink-300',
		icon: '/icons/project-stats/working-hours.svg',
	},
]

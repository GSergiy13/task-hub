import { PROJECT_STATS_DATA } from '../data/project-stats.data'
import { ProjectStatCard } from './ProjectStatCard'

export const ProjectStats = () => {
	return (
		<div className='space-y-4'>
			{PROJECT_STATS_DATA.map(stat => (
				<ProjectStatCard key={stat.id} projectStat={stat} />
			))}
		</div>
	)
}

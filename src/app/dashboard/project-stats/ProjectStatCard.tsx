import type { IProjectStats } from './project-stats.type'
import cn from 'clsx'
import Image from 'next/image'

import { formatMinutes } from '@/utils/format-minutes'

interface Props {
	projectStat: IProjectStats
}

export const ProjectStatCard = ({ projectStat }: Props) => {
	return (
		<div
			className={cn(
				projectStat.bgColor,
				'relative overflow-hidden rounded-2xl p-5'
			)}
		>
			<div className='relative z-10 flex items-center justify-between'>
				<div className='flex flex-col text-white dark:text-neutral-800'>
					<span className='mb-1 text-4xl font-semibold'>
						{projectStat.id === 3
							? formatMinutes(projectStat.number)
							: projectStat.number}
					</span>
					<span className='text-sm'>{projectStat.label}</span>
				</div>

				<div className='ml-2 flex-shrink-0'>
					<Image
						src={projectStat.icon}
						alt={projectStat.label}
						width={90}
						height={90}
						className='h-22 w-22'
						loading='eager'
					/>
				</div>
			</div>
		</div>
	)
}

import { ProgressBar } from './ProgressBar'
import { cn } from '@/utils'
import { format, isToday } from 'date-fns'
import {
	Edit2,
	Link as LinkIcon,
	Image as LucideImage,
	MessageSquareMore
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { CreateSubTaskModal } from '@/app/dashboard/last-tasks/create-sub-task/CreateSubTaskModal'

import { ICON_MAP } from '@/utils/icon-map'

import type { ITask } from '@/types/task.types'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	task: ITask
	isCalor?: boolean
	isMinimal?: boolean
}

export const Task = observer(({ task, isCalor, isMinimal }: Props) => {
	const completedCount = task.subTasks.filter(t => t.isCompleted).length
	const totalCount = task.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)

	const Icon = ICON_MAP[task.icon]

	const dueDate = useMemo(() => {
		return isToday(task.dueDate.date)
			? 'Today'
			: `${Math.ceil((+task.dueDate.date - Date.now()) / (1000 * 60 * 60 * 24))} days`
	}, [task.dueDate.date])

	return (
		<div
			className={cn(
				'bg-card w-full min-w-0 rounded-xl p-3.5',
				isCalor && task.color,
				isCalor && 'text-white'
			)}
		>
			<div
				className={cn(
					'mb-2 flex items-start justify-between gap-1',
					isMinimal && 'mb-0 flex-col gap-3'
				)}
			>
				<div className='flex items-start gap-3'>
					<div
						className={cn(
							'bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5 dark:bg-white/10 dark:text-white',
							isCalor && 'bg-white/20 text-white'
						)}
					>
						<Icon />
					</div>

					<div className={cn(!isMinimal && 'w-32')}>
						<p className='mb-1 text-sm leading-tight font-medium wrap-normal opacity-90'>
							{task.title}
						</p>

						<div>
							<p className={cn('text-xs opacity-50', isCalor && 'opacity-70')}>
								{isMinimal ? (
									<>
										{format(task.dueDate.startTime!, 'ha')} {' -'}{' '}
										{format(task.dueDate.endTime!, 'ha')}
									</>
								) : (
									<>Due: {dueDate}</>
								)}
							</p>
						</div>
					</div>
				</div>
				<div className='flex items-center -space-x-2'>
					{task.users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatarPath || ''}
								alt={user.name}
								width={32}
								height={32}
								className='rounded-full border border-white dark:border-neutral-800'
							/>
						</div>
					))}
				</div>
			</div>

			{!isMinimal && (
				<div className='my-3'>
					<ProgressBar progress={progress} />
				</div>
			)}

			{!isMinimal && (
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<span className='flex items-center gap-1 text-xs'>
							<MessageSquareMore
								className='opacity-40'
								size={12}
							/>{' '}
							{task.comments.length}
						</span>
						<span className='flex items-center gap-1 text-xs'>
							<LucideImage
								className='opacity-40'
								size={12}
							/>{' '}
							{task.resources.length}
						</span>
						<span className='flex items-center gap-1 text-xs'>
							<LinkIcon
								className='opacity-40'
								size={12}
							/>{' '}
							{task.links.length}
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<CreateSubTaskModal taskId={task.id} />

						<Link
							href={DashboardPages.TASK_EDIT(task.id)}
							className='bg-primary/10 text-primary block rounded-full p-1.5 dark:bg-white/10 dark:text-white'
						>
							<Edit2 size={16} />
						</Link>
					</div>
				</div>
			)}
		</div>
	)
})

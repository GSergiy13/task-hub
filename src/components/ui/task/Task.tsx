import { ProgressBar } from './ProgressBar'
import {
	Edit2,
	Link as LinkIcon,
	Image as LucideImage,
	MessageSquareMore
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'

import { CreateSubTaskModal } from '@/app/dashboard/last-tasks/create-sub-task/CreateSubTaskModal'

import { ICON_MAP } from '@/utils/icon-map'

import type { ITask } from '@/types/task.types'

import { Pages } from '@/config/pages'

interface Props {
	task: ITask
}

export const Task = observer(({ task }: Props) => {
	const completedCount = task.subTasks.filter(t => t.isCompleted).length
	const totalCount = task.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)

	const Icon = ICON_MAP[task.icon]

	return (
		<div className='bg-card w-full min-w-0 rounded-xl p-3.5'>
			<div className='mb-2 flex items-start justify-between gap-1'>
				<div className='flex items-start gap-3'>
					<div className='bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5 dark:bg-white/10 dark:text-white'>
						<Icon />
					</div>

					<div className='w-32'>
						<p className='mb-1 text-sm leading-tight font-medium wrap-normal opacity-90'>
							{task.title}
						</p>

						<div>
							<p className='text-xs opacity-50'>
								Due:{' '}
								{Math.ceil(
									(+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24)
								)}{' '}
								days
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

			<div className='my-3'>
				<ProgressBar progress={progress} />
			</div>

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
						href={Pages.TASK_EDIT(task.id)}
						className='bg-primary/10 text-primary block rounded-full p-1.5 dark:bg-white/10 dark:text-white'
					>
						<Edit2 size={16} />
					</Link>
				</div>
			</div>
		</div>
	)
})

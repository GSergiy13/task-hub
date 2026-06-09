'use client'

import { LastTasksFilter } from './LastTasksFilter'
import { TASKS } from './last-tasks.data'
import { useMemo, useState } from 'react'

import { Task } from '@/components/ui/task/Task'

import type { TTaskStatus } from '@/types/task.types'

export const LastTasks = () => {
	const [status, setStatus] = useState<TTaskStatus | null>('not-started')

	const filteredTasks = useMemo(() => {
		if (!status) return TASKS

		switch (status) {
			case 'not-started':
				return TASKS.filter(task =>
					task.subTasks.some(subTask => subTask.isCompleted === false)
				)

			case 'in-progress':
				return TASKS.filter(task =>
					task.subTasks.some(subTask => subTask.isCompleted === false)
				)

			case 'completed':
				return TASKS.filter(task =>
					task.subTasks.every(subTask => subTask.isCompleted === true)
				)

			case 'blocked':
				return TASKS.filter(task =>
					task.subTasks.some(subTask => subTask.isCompleted === false)
				)

			default:
				return TASKS
		}
	}, [status])

	return (
		<div className='w-full'>
			<div>
				<div className='mb-5 flex items-center justify-between'>
					<h2 className='mb-5 text-xl font-semibold'>
						Last Tasks{' '}
						<span className='text-lg opacity-30'>({filteredTasks.length})</span>
					</h2>

					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
						eligendi, enim molestiae recusandae repellat nesciunt aperiam eum
						ipsum doloremque aspernatur distinctio culpa eaque debitis incidunt
						pariatur corporis. Adipisci, et inventore?
					</div>

					<div>
						<LastTasksFilter
							setStatus={setStatus}
							status={status}
						/>
					</div>
				</div>

				<div className='flex w-full justify-between gap-3'>
					{filteredTasks.length ? (
						filteredTasks.map(task => (
							<Task
								key={task.id}
								task={task}
							/>
						))
					) : (
						<div className='opacity-50'>Noto founder</div>
					)}
				</div>
			</div>
		</div>
	)
}

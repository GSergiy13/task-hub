'use client'

import { TASKS } from './last-tasks.data'

import { Task } from '@/components/ui/task/Task'

export const LastTasks = () => {
	return (
		<div>
			<div>
				<h2 className='mb-5 text-xl font-semibold'>
					Last Tasks{' '}
					<span className='text-lg opacity-30'>({TASKS.length})</span>
				</h2>

				<div className='flex w-full justify-between gap-3'>
					{TASKS.length ? (
						TASKS.map(task => (
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

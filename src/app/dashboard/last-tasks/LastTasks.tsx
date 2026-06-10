'use client'

import { LastTasksFilter } from './LastTasksFilter'
import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'

import { Task } from '@/components/ui/task/Task'

export const LastTasks = observer(() => {
	const filteredTasks = taskStore.filteredTasks

	return (
		<div className='w-full'>
			<div>
				<div className='mb-5 flex items-center justify-between'>
					<h2 className='mb-5 text-xl font-semibold'>
						Last Tasks{' '}
						<span className='text-lg opacity-30'>({filteredTasks.length})</span>
					</h2>

					<div>
						<LastTasksFilter />
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
})

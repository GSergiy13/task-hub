'use client'

import { Task } from '@/components/ui/task/Task'
import { TASKS } from './last-tasks.data'

export const LastTasks = () => {
	return (
		<div>
			<div>
				<h2 className='text-xl font-medium mb'>
					Last Tasks <span className=' opacity-50 '>({TASKS.length})</span>
				</h2>

				<div className='flex'>
					{TASKS.length ? (
						TASKS.map(task => <Task key={task.id} task={task} />)
					) : (
						<div className='opacity-50'>Noto founder</div>
					)}
				</div>
			</div>
		</div>
	)
}

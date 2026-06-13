import { Heading } from '../ui/Heading'
import { Task } from '../ui/task/Task'
import { taskStore } from '@/stores/task.store'
import { getHours, getMinutes } from 'date-fns'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

export const TasksTimeline = observer(() => {
	const todayTasks = taskStore.todayTasks
	const users = [
		...new Map(
			todayTasks.flatMap(task => task.users).map(user => [user.id, user])
		).values()
	]

	return (
		<div className='bg-card mt-3 rounded-xl p-3.5 pb-5'>
			<div className='mb-4 flex justify-between gap-1'>
				<Heading className='text-xl'>Today's Tasks</Heading>

				<div className='flex items-center -space-x-3'>
					{users.map(user => (
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

			<div className='w-full overflow-x-auto p-3'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div
							key={hour}
							className='text-left text-sm font-medium opacity-50'
						>
							{hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
						</div>
					))}
				</div>

				<div className='relative h-52'>
					{todayTasks.map(task => {
						const start = getHours(task.dueDate.startTime)
						const end = getHours(task.dueDate.endTime)

						const startMinute = getMinutes(task.dueDate.startTime)
						const endMinute = getMinutes(task.dueDate.endTime)

						const startPosition =
							(((start - 9) * 60 + startMinute) / ((17 - 9) * 60)) * 100
						const endPosition =
							(((end - 9) * 60 + endMinute) / ((17 - 9) * 60)) * 100

						return (
							<div
								key={task.id}
								className='absolute top-2'
								style={{
									left: `${startPosition}%`,
									width: `${endPosition - startPosition}%`
								}}
							>
								<Task
									task={task}
									isCalor
									isMinimal
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
})

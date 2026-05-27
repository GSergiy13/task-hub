import type { LucideIcon } from 'lucide-react'
import type { IProfile } from './profile.type'

export interface ISubTask {
	id: string
	title: string
	isCompleted?: boolean
}

export interface ITask extends ISubTask {
	icon: LucideIcon
	dueDate: Date
	comments: string[]
	resources: string[]
	links: string[]
	users: IProfile[]
	subTasks: ISubTask[]
}

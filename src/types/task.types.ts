import type { IProfile } from './profile.type'
import type { LucideIcon } from 'lucide-react'

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
export type TTaskStatus =
	| 'not-started'
	| 'in-progress'
	| 'completed'
	| 'blocked'

export type TTaskFormData = Pick<ITask, 'title' | 'dueDate' | 'icon'>

import type { IProfile } from './profile.type'

import type { IconName } from '@/utils/icon-map'

export interface ISubTask {
	id: string
	title: string
	isCompleted?: boolean
}

export interface ITask extends ISubTask {
	icon: IconName
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

export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFormData = Pick<ITask, 'title' | 'dueDate' | 'icon'>

export type TSubTaskFormData = Pick<ISubTask, 'title'>

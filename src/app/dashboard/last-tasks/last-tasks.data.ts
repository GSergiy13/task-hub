import { USERS } from '../users.data'
import { Plane, ShoppingBasket, TabletSmartphone } from 'lucide-react'

import type { ITask } from '@/types/task.types'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App User Flow',
		icon: 'Plane',
		dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
		comments: ['This is a comment', 'Another comment', 'Yet another comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https://example.com', 'https://example.org'],
		users: [USERS[0], USERS[1], USERS[2]],
		subTasks: [
			{
				id: '1',
				title: 'Create wireframes',
				isCompleted: true
			},
			{
				id: '2',
				title: 'Design UI components',
				isCompleted: true
			},
			{
				id: '3',
				title: 'Implement user flow',
				isCompleted: false
			},
			{
				id: '4',
				title: 'Test user flow',
				isCompleted: false
			}
		]
	},
	{
		id: '2',
		title: 'E-commerce Website Redesign',
		icon: 'ShoppingBasket',
		dueDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
		comments: ['Initial design review', 'Feedback received'],
		resources: ['', '', '', '', ''],
		links: ['https://example.com', 'https://example.org'],
		users: [USERS[1], USERS[3], USERS[4]],
		subTasks: [
			{
				id: '1',
				title: 'Create new design mockups',
				isCompleted: true
			}
		]
	},
	{
		id: '3',
		title: 'Mobile App Feature Update',
		icon: 'TabletSmartphone',
		dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
		comments: ['Feature requirements defined'],
		resources: ['', '', '', ''],
		links: ['https://example.com'],
		users: [USERS[2], USERS[5], USERS[6]],
		subTasks: [
			{
				id: '1',
				title: 'Implement new feature',
				isCompleted: true
			},
			{
				id: '2',
				title: 'Conduct user testing',
				isCompleted: true
			},
			{
				id: '3',
				title: 'Prepare release notes',
				isCompleted: true
			},
			{
				id: '4',
				title: 'Deploy to production',
				isCompleted: false
			}
		]
	}
]

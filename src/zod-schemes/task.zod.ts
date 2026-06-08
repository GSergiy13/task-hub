import { z } from 'zod'

import { ICON_NAMES } from '@/utils/icon-map'

export const TaskSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	icon: z.enum(ICON_NAMES, {
		error: () => ({
			message: 'Invalid icon selected'
		})
	}),
	dueDate: z.date().min(new Date(), 'Due date must be in the future')
})

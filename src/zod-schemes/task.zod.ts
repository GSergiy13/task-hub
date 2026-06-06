import type { LucideIcon } from 'lucide-react'
import { z } from 'zod'

export const TaskSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	icon: z.custom<LucideIcon>(value => typeof value === 'function', {
		message: 'Icon must be a valid LucideIcon component'
	}),
	dueDate: z.date().min(new Date(), 'Due date must be in the future')
})

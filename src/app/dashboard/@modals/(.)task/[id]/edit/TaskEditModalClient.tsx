'use client'

import { TASK_ICONS } from './task-icons.data'
import { TaskSchema } from '@/zod-schemes/task.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { TASKS } from '@/app/dashboard/last-tasks/last-tasks.data'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import type { TTaskFormData } from '@/types/task.types'

interface Props {
	id: string
}

export function TaskEditModalClient({ id }: Props) {
	const router = useRouter()

	const closeModal = () => {
		router.back()
	}

	const form = useForm<TTaskFormData>({
		resolver: zodResolver(TaskSchema)
	})

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [])

	useEffect(() => {
		console.log(id)
		form.reset(TASKS.find(task => task.id === id) || {})
	}, [id])

	const onSubmit = (data: TTaskFormData) => {
		console.log('Form submitted:', data)

		closeModal()
	}

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
			onClick={closeModal}
		>
			<div
				className='mx-4 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white p-6 dark:bg-neutral-800'
				onClick={e => e.stopPropagation()}
			>
				<div className='mb-6 flex items-center justify-between'>
					<h2 className='text-xl font-bold'>Edit Task {id}</h2>
					<button onClick={closeModal}>×</button>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
						<FormField
							name='title'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<input
											{...field}
											className='w-full rounded border p-2'
											placeholder='Enter title'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Controller
							control={form.control}
							name='dueDate'
							render={({ field: { value, onChange } }) => (
								<FormItem>
									<FormControl>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant='outline'
													data-empty={!value}
													className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
												>
													<CalendarIcon />
													{value ? (
														format(value, 'PPP')
													) : (
														<span>Pick a due date</span>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent
												className='w-auto p-0'
												align='start'
											>
												<Calendar
													mode='single'
													selected={value}
													onSelect={onChange}
												/>
											</PopoverContent>
										</Popover>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Controller
							control={form.control}
							name='icon'
							render={({ field: { value, onChange } }) => (
								<FormItem>
									<FormLabel>Icon</FormLabel>
									<FormControl>
										<div className='flex flex-wrap gap-2'>
											{TASK_ICONS.map((Icon, index) => (
												<Button
													key={index}
													type='button'
													variant={
														value?.name === Icon.name ? 'default' : 'outline'
													}
													onClick={() => onChange(Icon)}
													className='p-2'
												>
													<Icon />
												</Button>
											))}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type='submit'>Save Changes</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

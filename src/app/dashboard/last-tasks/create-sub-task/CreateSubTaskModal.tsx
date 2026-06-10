import { taskStore } from '@/stores/task.store'
import { Plus } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface Props {
	taskId: string
}

export const CreateSubTaskModal = observer(({ taskId }: Props) => {
	const [title, setTitle] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const handleCreate = () => {
		if (!title.trim()) {
			toast.error('Title cannot be empty', {
				id: 'sub-task-form-error'
			})
			return
		}

		taskStore.addSubTask(taskId, { title })
		toast.success('Sub task created successfully!')
		setTitle('')
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger className='bg-primary hover:bg-primary/90 rounded-full p-1 text-white'>
				<Plus size={18} />
			</DialogTrigger>

			<DialogContent className='sm:max-w-sm'>
				<DialogHeader>
					<DialogTitle className='mb-4'>Create Sub Task</DialogTitle>
					<DialogDescription>
						<Input
							placeholder='Sub task title...'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>

						<Button
							className='mt-2'
							onClick={handleCreate}
						>
							Create
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
})

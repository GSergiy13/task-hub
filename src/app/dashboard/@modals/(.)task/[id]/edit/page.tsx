import { TaskEditModalClient } from './TaskEditModalClient'

interface EditTaskModalProps {
	params: {
		id: string
	}
}

export default async function EditTaskModal({ params }: EditTaskModalProps) {
	const { id } = await params

	return <TaskEditModalClient id={id} />
}

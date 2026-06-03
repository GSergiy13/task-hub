import { TaskEditModalClient } from './TaskEditModalClient'

interface EditTaskModalProps {
	params: {
		id: string
	}
}

export default function EditTaskModal({ params }: EditTaskModalProps) {
	console.log('Edit Task Modal ID:', params.id)

	return <TaskEditModalClient id={params.id} />
}

import { Link } from 'lucide-react'

import { Pages } from '@/config/pages'

interface Props {
	params: {
		id: string
	}
}

export default async function EditTaskPage({ params }: Props) {
	const { id } = await params
	console.log('Edit Task Page ID:', id)

	return (
		<div className='p-4'>
			<h1 className='mb-4 text-2xl font-bold'>Edit Task Page</h1>

			<Link
				className='text-blue-500 hover:underline'
				href={Pages.DASHBOARD}
			>
				Go Back
			</Link>
		</div>
	)
}

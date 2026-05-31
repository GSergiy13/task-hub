import { cn } from '@/utils'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import type { TTaskStatus } from '@/types/task.types'

interface Props {
	status: TTaskStatus | null
	setStatus: (status: TTaskStatus | null) => void
}

const statuses: Array<TTaskStatus | 'all'> = [
	'all',
	'not-started',
	'in-progress',
	'completed'
]

export function LastTasksFilter({ setStatus, status }: Props) {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						className='capitalize'
					>
						{status?.replace('-', ' ') || 'All'}
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent align='end'>
					{statuses.map(s => (
						<DropdownMenuItem
							key={`${status}-${s}`}
							onClick={() => setStatus(s === 'all' ? null : s)}
							className={cn(
								status === s ? 'font-bold' : '',
								'cursor-pointer capitalize'
							)}
						>
							{s.replace('-', ' ')}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

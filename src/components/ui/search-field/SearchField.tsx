import { Search } from 'lucide-react'

interface Props {
	placeholder?: string
	value: string
	onChange: (value: string) => void
}

export const SearchField = ({
	placeholder = 'Search...',
	value,
	onChange,
}: Props) => {
	return (
		<div className='flex items-center w-full max-w-sm px-4 py-2 bg-white dark:bg-white/10 rounded-full shadow'>
			<Search className='text-neutral-500 mr-2' size={20} />

			<input
				type='search'
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
				className='w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400 text-neutral-800 dark:text-white'
			/>
		</div>
	)
}

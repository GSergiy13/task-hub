'use client'

import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'

export const ClientDashboard = () => {
	return (
		<div>
			<div className='flex justify-between w-full mb-6'>
				<Heading>Dashboard</Heading>

				<SearchField value='' onChange={() => {}} />
			</div>
		</div>
	)
}

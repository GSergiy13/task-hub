import { AuthForm } from '../AuthForm'
import { NO_INDEX_PAGE } from '@/constants/seo.constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div>
			<AuthForm type='login' />
		</div>
	)
}

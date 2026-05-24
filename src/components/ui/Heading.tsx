import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const Heading = ({ children }: Props) => {
	return <h1 className='text-3xl font-medium '>{children}</h1>
}

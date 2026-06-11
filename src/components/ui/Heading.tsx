import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

export const Heading = ({ children, className }: Props) => {
	return <h1 className={cn('text-3xl font-medium', className)}>{children}</h1>
}

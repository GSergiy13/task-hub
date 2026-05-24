interface Props {
	title: string
}

export const SidebarHeading = ({ title }: Props) => {
	return (
		<div className='mb-1.5 font-medium text-neutral-300 dark:text-neutral-400 opacity-70'>
			{title}
		</div>
	)
}

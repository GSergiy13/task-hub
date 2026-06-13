import cn from 'clsx'
import { CheckCircle } from 'lucide-react'
import { useMemo } from 'react'

export const ProgressBar = ({ progress }: { progress: number }) => {
	const clamped = Math.max(0, Math.min(100, progress))

	const progressText = useMemo(() => {
		if (clamped >= 100)
			return (
				<>
					<CheckCircle
						className='mr-1'
						size={12}
					/>
					Done
				</>
			)

		return `${clamped}%`
	}, [clamped])

	const progressColor = useMemo(() => {
		if (clamped >= 100) return 'bg-emerald-500'
		if (clamped >= 75) return 'bg-amber-400'
		if (clamped >= 50) return 'bg-primary dark:bg-primary/70'
		if (clamped >= 25) return 'bbg-rose-400'
		return 'bg-neutral-300 '
	}, [clamped])

	return (
		<div className='bg-primary/10 relative h-8 w-full overflow-hidden rounded-full'>
			<div
				className={cn(
					`flex h-full cursor-default items-center justify-center rounded-full bg-[length:28px_30px] font-medium text-white ${progressColor} transition-all duration-500 ease-in-out`,
					{
						'animate-stripes': clamped < 100
					}
				)}
				style={{
					width: `${clamped}%`,
					backgroundImage:
						'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255, 255,255,0.15) 10px, transparent 10px, transparent 20px)'
				}}
			>
				{progressText}
			</div>
		</div>
	)
}

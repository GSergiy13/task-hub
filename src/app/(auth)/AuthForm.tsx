'use client'

import { AuthSchema } from '@/zod-schemes/auth.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'

import { Pages } from '@/config/pages'

interface Props {
	type: 'login' | 'register'
}

export const AuthForm = ({ type }: Props) => {
	const router = useRouter()
	const isLogin = type === 'login'
	const form = useForm<z.infer<typeof AuthSchema>>({
		resolver: zodResolver(AuthSchema)
	})

	const onSubmit = (data: z.infer<typeof AuthSchema>) => {
		toast.success(
			isLogin ? 'Logged in successfully!' : 'Registered successfully!'
		)

		form.reset()
		router.replace(Pages.DASHBOARD)
	}

	return (
		<BubbleBackground
			// interactive
			className='absolute inset-0 flex h-full min-h-screen w-full items-center justify-center'
		>
			<div className='relative z-10 w-full max-w-xl rounded-lg bg-white p-6 dark:bg-neutral-800'>
				<h1 className='mb-4 text-2xl font-bold'>
					{' '}
					{isLogin ? 'Login' : 'Register'}
				</h1>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>

									<FormControl>
										<input
											{...field}
											type='email'
											className='w-full rounded border p-2'
											placeholder='Enter your email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='password'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>

									<FormControl>
										<input
											{...field}
											type='password'
											className='w-full rounded border p-2'
											placeholder='Enter your password'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type='submit'>{isLogin ? 'Login' : 'Register'}</Button>
					</form>
				</Form>
			</div>
		</BubbleBackground>
	)
}

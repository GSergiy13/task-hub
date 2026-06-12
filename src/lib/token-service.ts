import Cookie from 'js-cookie'

export const token = {
	accessToken: 'accessToken',
	refreshToken: 'refreshToken'
} as const

type TToken = (typeof token)[keyof typeof token]

export class TokenService {
	static set(name: TToken, token: string) {
		Cookie.set(name, token, {
			expires: 7,
			path: '/',
			secure: true,
			sameSite: 'lax'
		})
	}

	static get(name: TToken): string | undefined {
		return Cookie.get(name)
	}

	static remove(name: TToken) {
		Cookie.remove(name, { path: '/' })
	}
}

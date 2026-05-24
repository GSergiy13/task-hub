import type { Metadata } from 'next'
import { ClientDashboard } from './ClientDashboard'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function Dashboard() {
	return <ClientDashboard />
}

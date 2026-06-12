export class DashboardPages {
	static BASE = '/dashboard'

	static DASHBOARD = DashboardPages.BASE

	static TASKS = `${DashboardPages.BASE}/tasks`

	static TASK_EDIT(id: string) {
		return `${DashboardPages.BASE}/task/${id}/edit`
	}

	static MESSAGES = `${DashboardPages.BASE}/messages`
	static INSIGHT = `${DashboardPages.BASE}/insight`
	static TEAM = `${DashboardPages.BASE}/team`
	static SETTINGS = `${DashboardPages.BASE}/settings`
	static REPORT = `${DashboardPages.BASE}/report`
	static SCHEDULE = `${DashboardPages.BASE}/schedule`
}

import { command, getRequestEvent, query } from '$app/server'
import { appointmentsTable } from '$lib/db/schema'
import { z } from 'zod'
export const getAppointments = query(async () => {
	const event = getRequestEvent()
	const DB = event.locals.DB

	const res = await DB.select().from(appointmentsTable).all()
	return res
})

export const createAppointment = command(
	z.object({
		name: z.string(),
		email: z.string(),
		phone: z.string(),
		requestedTime: z.string(),
	}),
	async (data) => {
		const event = getRequestEvent()
		const DB = event.locals.DB

		const res = await DB.insert(appointmentsTable).values(data).run()
		await getAppointments().refresh()
		return res
	},
)

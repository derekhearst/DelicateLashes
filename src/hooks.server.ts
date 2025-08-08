import { drizzle } from 'drizzle-orm/d1'

export async function handle({ event, resolve }) {
	if (!event.locals.DB && event.platform?.env.DB) {
		event.locals.DB = drizzle(event.platform.env.DB)
	}

	return await resolve(event)
}

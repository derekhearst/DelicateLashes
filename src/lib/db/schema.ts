import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core'

export const appointmentsTable = sqliteTable('appointments', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	email: text().notNull(),
	phone: text().notNull(),
	requestedTime: text().notNull(),
})

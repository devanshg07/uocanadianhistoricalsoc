import { pgTable, timestamp, text, uuid } from 'drizzle-orm/pg-core'

export const emailRegistry = pgTable('email_registry', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { DrizzleD1Database } from 'drizzle-orm/d1'
import type { D1Database } from '@cloudflare/workers-types'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			DB: DrizzleD1Database
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				DB: D1Database
			}
		}
	}
}

export {}

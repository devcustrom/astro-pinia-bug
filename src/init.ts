import type { App } from 'vue';
import { getActivePinia } from './store/pinia';
import { PiniaColada } from '@pinia/colada'

const {
	SSR
} = import.meta.env

export default async (app: App) => {
	const pinia = await getActivePinia();

	app
		.use(pinia)
		.use(PiniaColada, {
			queryOptions: {
				gcTime: SSR ? false : 300_000
			}
		})
};

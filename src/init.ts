import type { App } from 'vue';
import { getActivePinia } from './store/pinia';

export default async (app: App) => {
	const pinia = await getActivePinia()
	app.use(pinia)
};

import type { App } from 'vue';
import { pinia } from './store/pinia';

export default async (app: App) => {
	app.use(pinia)
};

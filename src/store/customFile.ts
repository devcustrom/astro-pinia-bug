import { getActivePinia } from "../store/pinia";

export const test = async () => {
	const pinia = await getActivePinia()
	return pinia
}
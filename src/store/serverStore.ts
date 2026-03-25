import { AsyncLocalStorage } from 'async_hooks'
import { createPinia, type Pinia } from 'pinia'

const storage = import.meta.env.SSR ? new AsyncLocalStorage<Pinia>() : null

export const getPinia = () => {
	console.log(storage);
	return storage.getStore() ?? createPinia()
}
export const runWithPinia = <T>(pinia: Pinia, fn: () => T): T => storage.run(pinia, fn)

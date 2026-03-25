import { defineMiddleware } from 'astro:middleware'
import { createPinia } from 'pinia'
import { runWithPinia } from './store/serverStore'

export const onRequest = defineMiddleware((context, next) => {
	const pinia = createPinia()

    return runWithPinia(pinia, () => next())
})

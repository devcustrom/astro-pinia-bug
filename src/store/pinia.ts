import { createPinia, type Pinia } from 'pinia'
import { swapFunctions } from "astro:transitions/client";

export const pinia = import.meta.env.SSR ? null! : createPinia()

export const getActivePinia = async (): Promise<Pinia> => {
    if (import.meta.env.SSR) {
        const { getPinia } = await import('./serverStore')
        return getPinia()
    } else {
        return pinia
    }
}

const save = (doc: Document) => {
	try {
		if(!doc) return
		const state = doc.getElementById('pinia-state')?.textContent ?? ''
		if(!state) return
		const data = JSON.parse(state)
		// pinia.state.value = data;
		Object.entries(data).forEach(([storeId, storeState]) => {
            const store = pinia._s.get(storeId)
            if (store) {
                store.$patch(storeState as any)
            } else {
                // store ещё не инициализирован — просто пишем в state
                pinia.state.value[storeId] = storeState
            }
        })
	} catch (e) {
		console.log(e);
	}
}

if (!import.meta.env.SSR) {
	document.addEventListener("astro:before-swap", (event) => {
		const doc = event.newDocument;
		event.swap = () => {
			save(doc)
			swapFunctions.deselectScripts(doc);
			swapFunctions.swapRootAttributes(doc);
			swapFunctions.swapHeadElements(doc);
			const restoreFocusFunction = swapFunctions.saveFocus();
			swapFunctions.swapBodyElement(doc.body, document.body);
			restoreFocusFunction();
		}
	})
	save(document)
}

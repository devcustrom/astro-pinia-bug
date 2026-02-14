import { createPinia } from "pinia";
import { swapFunctions } from "astro:transitions/client";

export let pinia = createPinia()

const save = (doc: Document) => {
	try {
		if(!doc) return
		const state = doc.getElementById('pinia-state')?.textContent ?? ''
		if(!state) return
		const data = JSON.parse(state)
		pinia.state.value = data;
	} catch (e) {
		console.log(e);
	}
}

if (!import.meta.env.SSR) {
	document.addEventListener("astro:before-preparation", () => {
		pinia = createPinia()
	});
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

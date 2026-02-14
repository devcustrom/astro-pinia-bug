import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore('test', () => {
	const arr = ref<string[]>([])
	console.log('test value: 123')//replace 123 with your value
	return {
		arr
	}
})

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore('test', () => {
	const arr = ref([])
	console.log('test')
	return {
		arr
	}
}) 
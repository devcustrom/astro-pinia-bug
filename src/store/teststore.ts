import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore('test', () => {
	const arr = ref<string[]>([])
	const obj = ref({
		key: 'value'
	})
	const $reset = () => {
		arr.value = []
		obj.value = {
			key: 'value'
		}
	}
	console.log('test value: 123s')//replace 123 with your value
	return {
		$reset,
		arr,
		obj
	}
})

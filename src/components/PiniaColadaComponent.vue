<template>
	<pre>{{ obj }}</pre>
</template>

<script setup lang="ts">
	import { useQuery } from '@pinia/colada';

	import { data } from '../data/piniacolada';

	const {
		data: obj
	} = useQuery({
		query: async () => {
			return data
		},
		key: ['test']
	})
</script>
<template>
	<pre>{{ arr }}</pre>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia';
import { useTestStore } from '../store/teststore'
	const {
		arr
	} = storeToRefs(useTestStore())
</script>
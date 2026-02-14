<template>
	<pre>{{ obj }}</pre>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia';
import { useTestStore } from '../store/teststore'
	const {
		arr,
		obj
	} = storeToRefs(useTestStore())
</script>
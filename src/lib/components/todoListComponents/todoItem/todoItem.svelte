<script lang="ts">
	import { Checkbox, Button } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';

	export let checked: boolean;
	export let label: string;
	export let id: number;
	const dispatch = createEventDispatcher();

	function onDelete() {
		dispatch('removeItem', id);
	}
</script>

<div class="todo-item grid h-full grid-cols-3 grid-rows-1 border-2 border-gray-200 p-2">
	<div class="flex items-center justify-center">
		<Checkbox {checked} />
	</div>

	<div class="flex items-center">
		{label}
	</div>

	<div class="flex items-center justify-center">
		<Button class="w-full" on:click={onDelete}>Delete</Button>
	</div>
</div>

<style>
	.todo-item {
		grid-template-columns: 20px 1fr 100px;
		grid-column-gap: 10px;

		&:not(:last-of-type):not(:first-of-type) {
			border-top: none;
		}

		&:last-of-type {
			border-top: none;
		}
	}
</style>

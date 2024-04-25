<script lang="ts">
	import { filterStore, todoStore } from '$lib/stores/todoStore';
	import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from '$lib/stores/constants';
	import { TodoListItem } from '$lib/components/todoListComponents/TodoItem';
	import { Button, Card, Textarea } from 'flowbite-svelte';
	import { TodoListFilters } from '$lib/components/todoListComponents/TodoListFilters';
	import type { todoListT } from '$lib/types/todoList';

	let newTodoInputValue: string = '';

	$: isTodoInputActive = !!newTodoInputValue.trim();
	$: amountOfDone = list.filter((item) => item.isDone).length;
	$: amountOfActive = list.filter((item) => !item.isDone).length;

	$: filter = 'ALL';

	let list: todoListT = [];

	$: filteredList = list.filter((item) => {
		if (filter === FILTER_ALL) return true;
		if (filter === FILTER_DONE) return item.isDone;
		if (filter === FILTER_ACTIVE) return !item.isDone;
	});

	todoStore.subscribe((store) => {
		list = store;
	});

	filterStore.subscribe((store) => {
		filter = store;
	});

	export function removeTodo(event: CustomEvent<number>) {
		list = list.filter((item) => item.id !== event.detail);
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		newTodoInputValue = target!.value || '';
	}

	export function addTodo() {
		todoStore.set([
			...list,
			{ text: newTodoInputValue, id: Math.floor(Math.random() * 10), isDone: false }
		]);

		newTodoInputValue = '';
	}

	export function toggleIsDone(event: CustomEvent<number>) {
		todoStore.set(
			list.map((item) => {
				if (item.id === event.detail) {
					item.isDone = !item.isDone;
				}

				return item;
			})
		);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<section>
	<h1>Svelte TODO</h1>

	<Card padding="xl" size="lg">
		<TodoListFilters />

		<div class="flex flex-col">
			{#if filteredList.length}
				{#each filteredList as item}
					<TodoListItem
						on:toggleIsDone={toggleIsDone}
						isDone={item.isDone}
						label={item.text}
						id={item.id}
						on:removeItem={removeTodo}
					/>
				{/each}
			{:else}
				<p>No TODOs yet</p>
			{/if}

			<div class="add-todo mt-2 grid h-full grid-cols-2 grid-rows-1 pb-2 pr-2 pt-2">
				<div class="flex items-center">
					<Textarea
						minRows={1}
						name="todoText"
						bind:value={newTodoInputValue}
						placeholder="Add a todo"
						on:input={handleInput}
						on:keypress={(e) => e.key === 'Enter' && addTodo()}
					/>
				</div>

				<div class="flex items-center justify-center">
					<Button
						class="h-full w-full"
						type="submit"
						color="green"
						disabled={!isTodoInputActive}
						on:click={addTodo}>Add</Button
					>
				</div>
			</div>
		</div>
	</Card>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.add-todo {
		display: grid;
		grid-template-columns: 1fr 100px;
		grid-column-gap: 10px;
	}

	h1 {
		width: 100%;
	}
</style>

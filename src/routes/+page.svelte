<script lang="ts">
	import { TodoListItem } from '$lib/components/todoListComponents/todoItem';
	import { Button, Card, Textarea } from 'flowbite-svelte';

	let newTodoInputValue: string = '';
	$: isTodoInputActive = !!newTodoInputValue.trim();

	let list = [
		{
			text: 'Text',
			isDone: false,
			id: 1
		},
		{
			text: 'huekst',
			isDone: true,
			id: 2
		},
		{
			text: 'huekst',
			isDone: true,
			id: 3
		},
		{
			text: 'huekst',
			isDone: true,
			id: 4
		},
		{
			text: 'huekst',
			isDone: true,
			id: 5
		},
		{
			text: 'huekst',
			isDone: true,
			id: 6
		},
		{
			text: 'huekst',
			isDone: true,
			id: 7
		}
	];

	export function removeTodo(id: CustomEvent<number>) {
		list = list.filter((item) => item.id !== id.detail);
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		newTodoInputValue = target!.value || '';
	}

	export function addTodo() {
		list = [
			...list,
			{ text: newTodoInputValue, id: Math.floor(Math.random() * 10), isDone: false }
		];
		newTodoInputValue = '';
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<section>
	<h1>Svelte TODO</h1>

	<Card padding="xl" size="lg">
		<div class="mb-4 flex items-center justify-between"></div>

		<div class="flex flex-col">
			{#if list.length}
				{#each list as item}
					<TodoListItem
						checked={item.isDone}
						label={item.text}
						id={item.id}
						on:removeItem={removeTodo}
					/>
				{/each}
			{:else}
				<p>No TODOs yet</p>
			{/if}

			<div class="add-todo grid h-full grid-cols-2 grid-rows-1 pb-2 pr-2 pt-2">
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
						class="w-full"
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

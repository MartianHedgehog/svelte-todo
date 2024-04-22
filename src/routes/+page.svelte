<script>
	import Counter from './Counter.svelte';
	import { TodoListItem } from '$lib/components/todoListComponents/todoItem';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import { Card, Listgroup, Avatar } from 'flowbite-svelte';
	import { Checkbox } from 'flowbite-svelte';

	let list = [
		{
			text: 'Text',
			isDone: false
		},
		{
			text: 'huekst',
			isDone: true
		},
		{
			text: 'huekst',
			isDone: true
		},
		{
			text: 'huekst',
			isDone: true
		},
		{
			text: 'huekst',
			isDone: true
		},
		{
			text: 'huekst',
			isDone: true
		},
		{
			text: 'huekst',
			isDone: true
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<section>
	<h1>Svelte TODO</h1>

	<Card padding="xl" size="md">
		<div class="mb-4 flex items-center justify-between"></div>

		<div class="flex flex-col">
			{#each list as item}
				<TodoListItem checked={item.isDone} label={item.text} />
			{/each}
		</div>

		<!--		<Listgroup items={list} let:item class="border-0 dark:!bg-transparent">-->
		<!--			<div class="flex items-center space-x-4 rtl:space-x-reverse">-->
		<!--				<Checkbox on:change={}item.isDone class="flex-shrink-0" />-->
		<!--				<div class="flex-1 min-w-0">-->
		<!--					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">-->
		<!--						{item.name}-->
		<!--					</p>-->
		<!--					<p class="text-sm text-gray-500 truncate dark:text-gray-400">-->
		<!--						{item.email}-->
		<!--					</p>-->
		<!--				</div>-->
		<!--				<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">-->
		<!--					{item.value}-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</Listgroup>-->
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

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

<script lang="ts">
	import { filterStore } from '$lib/stores/todoStore';
	import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from '$lib/stores/constants';

	$: filter = FILTER_ALL;
	filterStore.subscribe((store) => {
		filter = store;
	});

	function setFilter(filter: string) {
		filterStore.set(filter);
	}
</script>

<div>
	<svg viewBox="0 0 2 3" aria-hidden="true">
		<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
	</svg>

	<ul>
		<li class={filter === FILTER_ALL ? 'active' : ''}>
			<button type="button" on:click={() => setFilter(FILTER_ALL)}>All</button>
		</li>
		<li class={filter === FILTER_ACTIVE ? 'active' : ''}>
			<button type="button" on:click={() => setFilter(FILTER_ACTIVE)}>Active</button>
		</li>
		<li class={filter === FILTER_DONE ? 'active' : ''}>
			<button type="button" on:click={() => setFilter(FILTER_DONE)}>Done</button>
		</li>
	</ul>

	<svg viewBox="0 0 2 3" aria-hidden="true">
		<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
	</svg>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	div button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	button:hover {
		color: var(--color-theme-1);
	}
</style>

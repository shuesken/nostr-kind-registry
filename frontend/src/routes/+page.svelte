<script lang="ts">
	import { goto } from '$app/navigation';
	import { getSortedKindsList } from '$lib/apis/crawlerApi';
	import type { PageData } from './$types';
	export let data: PageData;

	let kindsPromise = getSortedKindsList();

	async function sort(col: 'seen' | 'kind') {
		let res = await kindsPromise
		switch (col) {
			case 'kind':
				kindsPromise = Promise.resolve(res.sort((a, b) => a.kind - b.kind));
				break;
			case 'seen':
				kindsPromise = Promise.resolve(res.sort((a, b) => a.seen.valueOf() - b.seen.valueOf()));
				break;
		}
	}
</script>

<div class="max-w-prose">
	<h1 class="font-semibold">All Kinds Ever Seen</h1>
	This page lists every kind our crawlers have ever seen, along with the date of the first sighting.
	Click on a table row to get more information about that kind.
</div>

<div class="my-2 max-w-xl">
	<table
		class="table-fixed border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"
	>
		<thead>
			<tr>
				<th
					class="border border-slate-300 hover:bg-slate-200 hover:cursor-pointer"
					on:click={() => sort('kind')}>Kind</th
				>
				<th
					class="border border-slate-300 hover:bg-slate-200 hover:cursor-pointer"
					on:click={() => sort('seen')}>First Seen</th
				>
			</tr>
		</thead>
		<tbody>
			{#await kindsPromise then kinds}
			{#each kinds as kind (kind.kind)}
				<tr
					on:click={() => goto(`/kinds/${kind.kind}`)}
					class="hover:bg-slate-200 hover:cursor-pointer"
				>
					<td
						class="border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 p-1"
					>
						{kind.kind}
					</td>
					<td
						class="border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 p-1"
					>
						{kind.seen.toDateString()}
					</td>
				</tr>
			{/each}
			{/await}
		</tbody>
	</table>
</div>

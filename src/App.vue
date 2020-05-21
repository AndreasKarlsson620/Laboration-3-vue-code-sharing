<template>
<div>
	<h2>
		Vue - coding snippets
	</h2>
	<addsnippet />
	<latestsnippets />
	<removesnippet />
</div>
</template>

<script>

import addsnippet from './components/addsnippet'
import latestsnippets from './components/latestsnippets'
import removesnippet from './components/removesnippet'

export default
{
	name: 'App',
	components:
	{
		"addsnippet":addsnippet,
		"latestsnippets":latestsnippets,
		"removesnippet":removesnippet
	},
	data: () =>
	({
		showmenu: true,
		showaddsnippet: false,
		showlatestsnippets: false,
		showremovesnippet: false
	}),
}
</script>

<style scoped>
h2
{
	text-align:center;
}
</style>

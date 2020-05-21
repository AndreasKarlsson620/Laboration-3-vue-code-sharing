<template>
	<div class="latestsnippets">
		<h3>
			Latest snippets
		</h3>
		<div>
			<p v-show="succeeded">
				Got snippets from API!
			</p>
			<p v-show="error">
				Something went wrong! Try again!
			</p>
		</div>
		<button class="showbutton" @click="getLatestSnippets">
			Show snippets
		</button>
		<div class="list">
			<div class="snippet" v-for="snippet in latestSnippets" :key="snippet.id">
				<div>
					{{snippet.title}}
				</div>
				<div>
					ID:{{snippet.id}}
				</div>
				<div>
					{{snippet.content}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'

const latestSnippetsUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest";

export default
{
	name: 'latestsnippets',
	data: () =>
	({
		latestSnippets: null,
		succeeded: false,
		error: false
	}),
	methods:
	{
		getLatestSnippets()
		{
			axios.get(latestSnippetsUrl)
			.then(response =>
			{
				this.latestSnippets = response.data;
				console.log(response.data);
				if(response)
				{
					this.succeeded = true;
					this.error = false;
				}
				else
				{
					this.succeeded = false;
					this.error = true;
				}
			})
			.catch(error =>
			{
				console.log("Error:", error);
			});
		}
	}
}
</script>

<style scoped>
.latestsnippets
{
	text-align: center;
}
.list
{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	padding: 0em;
	margin: 1em;
}
.snippet
{
	padding: 0.5em;
	border: 1px solid black;
}
.showbutton
{
	padding: 5px;
	border: 1px solid black;
}
</style>

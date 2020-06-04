<template>
	<div>
		<!--Latest snippets-->
		<div class="latestsnippets">
			<h3>
				Latest snippets
			</h3>
			<div>
				<p v-show="latestSucceeded">
					Got latest snippets from API!
				</p>
				<p v-show="latestError">
					Something went wrong! Try again!
				</p>
			</div>
			<button class="showbutton" @click="getLatestSnippets">
				Show latest snippets
			</button>
			<div class="list" v-show="showLatest">
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
		<!--Best snippets-->
		<div class="latestsnippets">
			<h3>
				Best snippets
			</h3>
			<div>
				<p v-show="bestSucceeded">
					Got best snippets from API!
				</p>
				<p v-show="bestError">
					Something went wrong! Try again!
				</p>
			</div>
			<button class="showbutton" @click="getBestSnippets">
				Show best snippets
			</button>
			<div class="list" v-show="showBest">
				<div class="snippet" v-for="snippet in bestSnippets" :key="snippet.id">
					<div>
						{{snippet.title}}
					</div>
					<div>
						ID:{{snippet.id}}
					</div>
					<div>
						{{snippet.content}}
					</div>
					<div>
						Score:{{snippet.score}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'

const latestSnippetsUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest";
const bestSnippetsUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php?best";

export default
{
	name: 'latestsnippets',
	data: () =>
	({
		showLatest: false,
		latestSnippets: null,
		latestSucceeded: false,
		latestError: false,
		showBest: false,
		bestSnippets: null,
		bestSucceeded: false,
		bestError: false
	}),
	methods:
	{
		getLatestSnippets()
		{
			this.showLatest = true;
			this.bestSucceeded = false;
			this.bestError = false;
			this.showBest = false;
			axios.get(latestSnippetsUrl)
			.then(response =>
			{
				this.latestSnippets = response.data;
				console.log(response.data);
				if(response)
				{
					this.latestSucceeded = true;
					this.latestError = false;
				}
				else
				{
					this.latestSucceeded = false;
					this.latestError = true;
				}
			})
			.catch(error =>
			{
				console.log("Error:", error);
			});
		},
		getBestSnippets()
		{
			this.latestSucceeded = false;
			this.latestError =false;
			this.showLatest = false;
			this.showBest = true;
			axios.get(bestSnippetsUrl)
			.then(response =>
			{
				this.bestSnippets = response.data;
				console.log(response.data);
				if(response)
				{
					this.bestSucceeded = true;
					this.bestError = false;
				}
				else
				{
					this.bestSucceeded = false;
					this.bestError = true;
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

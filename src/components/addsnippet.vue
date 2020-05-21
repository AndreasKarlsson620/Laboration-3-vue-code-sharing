<template>
	<div class="addsnippet-form">
		<h3>
			Add snippet
		</h3>
		<div>
			<p v-show="succeeded">
				Added snippet to API!
			</p>
			<p v-show="error">
				Something went wrong! Try again!
			</p>
		</div>
		<form>
			<div>
				<input class="title-box" type="text" placeholder="Title"
				v-model="snippet.title">
			</div>
			<div>
				<textarea class="content-box" type="text"
				placeholder="Code here..." v-model="snippet.content">
				</textarea>
		</div>
	</form>
	<button class="addbutton" @click="addSnippet">
		Add snippet
	</button>
</div>
</template>

<script>

import axios from 'axios'

const addSnippetUrl = "https://forverkliga.se/JavaScript/api/api-snippets.php";

export default
{
	name: 'addsnippet',
	data: () =>
	{
		return {
			snippet: {
				title: "",
				content: ""
			},
			succeeded: false,
			error: false
		};
	},
	methods:
	{
		addSnippet()
		{
			axios.post(addSnippetUrl,
			{
				add: "",
				title: this.snippet.title,
				content: this.snippet.content
			})
			.then(response =>
			{
				this.snippet = {
					title: response.data.title,
					contentL: response.data.content
				};
				console.log(response);
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
				console.log("Error: ", error);
			});
		}
	}
};
</script>

<style scoped>
.addsnippet-form
{
	text-align:center;
}
.title-box
{
	padding: 5px;
	border: 1px solid black;
}
.content-box
{
	padding: 5px;
	border: 1px solid black;
	margin-top: 1em;
}
.addbutton
{
	padding: 5px;
	border: 1px solid black;
	margin-top: 1em;
}
</style>

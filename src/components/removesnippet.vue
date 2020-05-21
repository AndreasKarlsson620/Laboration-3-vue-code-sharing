<template>
	<div class="removesnippet-form">
		<h3>
			Remove snippet
		</h3>
		<div>
			<p v-show="succeeded">
				Removed snippet from API!
			</p>
			<p v-show="error">
				Something went wrong! Try again!
			</p>
		</div>
		<div>
			<input class="id-box" type="text" placeholder="Id" v-model="id">
		</div>
		<button class="removebutton" @click="removeSnippet">
			Remove snippet
		</button>
	</div>
</template>

<script>

import axios from 'axios'

const removeSnippetUrl = "https://forverkliga.se/JavaScript/api/api-snippets.php";

export default
{
	name: 'removesnippet',
	data: () =>
	({
		id: "",
		succeeded: false,
		error: false
	}),
	methods:
	{
		removeSnippet()
		{
			axios.post(removeSnippetUrl,
			{
				delete: "",
				id: this.id
			})
			.then(response =>
			{
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
}
</script>

<style scoped>
.removesnippet-form
{
	text-align: center;
}
.id-box
{
	padding: 5px;
	border: 1px solid black;
}
.removebutton
{
	padding: 5px;
	border: 1px solid black;
	margin-top: 1em;
}
</style>

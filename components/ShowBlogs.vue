<template>
	<div class="show-blogs">
		<h1>All blog Articles</h1>
		<div v-for="blog in blogs" class="show-blog" :key="blog.id">
			<h2>{{ blog.title }}</h2>
			<article>{{ blog.body }}</article>
		</div>
	</div>
</template>

<script>
export default {
	data() { 
		return {
			blogs: []
		}
	},
	methods: {

	},

	created() {
		this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data) {
			this.blogs = data.body.slice(0, 10);

		});
	}
}
</script>

<style lang="scss">
	.show-blogs {
		max-width: 800px;
		margin: 0 auto;

		.show-blog {
			padding: 1.6rem;
			margin: 1.6rem 0;
			box-sizing: border-box;
			background: #eee;
		}
	}
</style>
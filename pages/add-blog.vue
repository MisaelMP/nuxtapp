<template>
	<div>
		<navigation/>
		<blog/>
	</div>
</template>

<script>
import Blog from "~/components/Blog.vue";
import Navigation from "~/components/Navigation.vue";

export default {
	components: {
		blog: Blog,
		navigation: Navigation
	}
}
</script>
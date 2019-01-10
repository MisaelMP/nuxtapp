<template>
	<div>
		<navigation/>
		<show-blogs/>
	</div>
</template>

<script>
import ShowBlogs from "~/components/ShowBlogs.vue";
import Navigation from "~/components/Navigation.vue";

export default {
	components: {
		'show-blogs': ShowBlogs,
		navigation: Navigation
	}
}
</script>
<template>
  <b-nav-form>
    <b-form-input v-model="search" class="mr-sm-2" type="text" placeholder="Enter your search"></b-form-input>
    <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-nav-form>
</template>

<script>
import ShowBlogs from "~/components/ShowBlogs.vue";

export default {
	components: {
		ShowBlogs
	},
  data() {
    return {
      search: ''
    }
  },
  methods: {

  },
	computed: {
		filteredBlogs: function() {
			return this.blogs.filter((blog) => {
				return blog.title.match(this.search);
			});
		}
	}
};
</script>


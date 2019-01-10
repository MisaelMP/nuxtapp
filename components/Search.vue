<template>
  <b-nav-form>
    <b-form-input v.bind=searchBlog v-model="search" class="mr-sm-2" type="text" placeholder="Enter your search"></b-form-input>
    <b-button v-on:click="$emit('mixins')" variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-nav-form>
</template>

<script>
	import searchMixins from "~/components/mixins/searchMixins";

export default {

  data() {
    return {
      search: ''
    }
  },
  methods: {
	  searchBlog:function() {
		  this.$emit('searchBlog', filteredBlogs());
	  }
  },
	computed: {
		
	},
	mixins: [searchMixins]
};
</script>


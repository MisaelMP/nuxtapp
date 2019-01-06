<template>
  <div v-theme:column="'wide'" class="show-blogs">
    <h1>All blog Articles</h1>
    <b-form-input v-model="search" class="mr-sm-2" type="text" placeholder="Enter your search"></b-form-input>
    <div v-for="blog in filteredBlogs" class="show-blog" :key="blog.id">
      <h2 v-rainbow>{{ blog.title | capitalise}}</h2>
      <article>{{ blog.body |snippet}}</article>
    </div>
  </div>
</template>

<script>
import Search from "~/components/Search.vue";

export default {
  components: {
    Search
  },
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },

  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
};
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
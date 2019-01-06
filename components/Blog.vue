<template>
  <div class="blog container">
    <h2 class="blog__title">Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label class="blog__label">Blog Title:</label>
      <input class="blog__text" v-model.lazy="blog.title" type="text" required>
      <label class="blog__label">Blog Content:</label>
      <textarea class="blog__text" v-model.lazy="blog.content"></textarea>
      <div class="checkboxes">
        <label class="checkboxes__label">Ninjas</label>
        <input class="checkboxes__input" type="checkbox" value="ninjas" v-model="blog.categories">
        <label class="checkboxes__label">Bears</label>
        <input class="checkboxes__input" type="checkbox" value="bears" v-model="blog.categories">
        <label class="checkboxes__label">Sailors</label>
        <input class="checkboxes__input" type="checkbox" value="sailors" v-model="blog.categories">
        <label class="checkboxes__label">Dragons</label>
        <input class="checkboxes__input" type="checkbox" value="dragons" v-model="blog.categories">
        <div>
          <label>Author:</label>
          <select v-model="blog.author">
            <option v-for="author in authors" :key="author.id">{{ author }}</option>
          </select>
          <b-button varian="primary" v-on:click.prevent="post">Add a Blog</b-button>
        </div>
      </div>
    </form>
	<div v-if="submitted">
		<h3>Thanks for adding your post</h3>
	</div>
    <div class="blog__preview">
      <h3 class="blog__subtitle">Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">:{{ category }}</li>
      </ul>
      <p>Author: {{blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
	  authors: ["The cochi cui", "Brian Eno", "George Bataille"],
	  submitted: false
    };
  },
  methods: {
    post:function() {
      this.$http.post("https://jsonplaceholder.typicode.com/posts", {
		title: this.blog.title,
		body: this.blog.content,
		userId: 1
      }).then(function(data) {
		  console.log(data);
		  this.submitted = true;
	  });
    }
  }
};
</script>

<style lang="scss">
.blog {
  margin-top: 7rem auto;
  box-sizing: border-box;

  &__title {
    color: #16161d;
  }

  &__subtitle {
    margin-top: 0.6rem;
  }

  &__text {
    display: flex;
    width: 100%;
    padding: 0.4rem;
  }

  &__preview {
    padding: 0.8rem 1.2rem;
    border: 1px solid #ccc;
    margin: 1.8rem 0;
  }

  .checkboxes {
    &__input {
      margin: 2rem 1rem 1rem 0;
    }
  }
}
</style>
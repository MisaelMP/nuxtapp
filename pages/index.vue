<template>
  <div>
    <navigation/>
    <carousel/>
    <section class="container content">
      <div>
        <h1 class="title">Nuxt Website</h1>
        <h2 class="subtitle">Nuxt.js project</h2>
        <div class="links">
          <b-button variant="primary" size="lg" target="_blank">Documentation</b-button>
          <b-button variant="danger" size="lg" target="_blank">GitHub</b-button>
        </div>
      </div>
    </section>
    <blog></blog>
	<show-blogs></show-blogs>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";
import Carousel from "~/components/Carousel.vue";
import Navigation from "~/components/Navigation.vue";
import Blog from "~/components/Blog.vue";
import ShowBlogs from "~/components/ShowBlogs.vue";

export default {
  components: {
    Carousel,
    Navigation,
	blog: Blog,
	'show-blogs': ShowBlogs
  }
};
</script>

<style>
.content {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  flex-direction: flex-column;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

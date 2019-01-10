<template>
  <header class="nav-bar">
    <div>
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <nuxt-link class="navbar-item" to="/">Home page</nuxt-link>
            <nuxt-link class="navbar-item" to="/add-blog">Add blog</nuxt-link>
            <nuxt-link class="navbar-item" to="/blogs">Search blogs</nuxt-link>
            <!-- <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>     -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import Search from "~/components/Search.vue";
export default {
  components: {
    Search
  }
};
</script>

<style lang="scss">
.nav-bar {
	margin-bottom: 3rem;
	
	.navbar-item {
		color: white;
		padding-right: 1rem;
		&:hover {
			opacity: .6;
			color: white;
			text-decoration: none;
		}
	}
}
</style>
<template>
  <header class="nav-bar">
    <div>
      <b-navbar type="dark" variant="dark">
        <search/>
      </b-navbar>
    </div>
  </header>
</template>

<style>
.nav-bar {
  margin-bottom: 2rem;
}
</style>

<script>
import Search from "~/components/Search.vue";
export default {
  components: {
    Search
  }
};
</script>

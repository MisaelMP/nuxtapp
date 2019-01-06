<template>
  <b-nav-form>
    <b-form-input class="mr-sm-2" type="text" placeholder="Enter your search"></b-form-input>
    <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" @click="search()">Search</b-button>
  </b-nav-form>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    }
  },
  methods: {

  },

};
</script>


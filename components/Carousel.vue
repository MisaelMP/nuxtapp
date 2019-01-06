<template>
  <div class="container">
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="3000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=53"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Third slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=50"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Fourth slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=51"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = 0;
    },
    onSlideEnd(slide) {
      this.sliding = 1;
    }
  }
};
</script>
<!-- carousel-1.vue -->

<style>
.carousel__text-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__text {
  display: inline-flex;
  background-color: #16161d;
  color: white;
  padding: 1rem 2rem;
}

.carousel__text:not(:first-child) {
  margin-left: 2rem;
}
</style>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="carousel-container w-full md:w-2/3 xl:w-3/5">
      <carousel :perPage="1" :navigationEnabled="true">
        <slide v-for="image in project.images" :key="image">
          <img :src="image" />
        </slide>
      </carousel>
      <h4 class="text-2xl mb-2 purple-title">{{ project.title }}</h4>

      <div class="bg-black lg:text-lg p-4 m-4 w-full 2xl:w-4/5 mx-auto">
        <p class="mb-5 font-dongle text-2xl sm:text-3xl">
          {{ project.description }}
        </p>
        <button class="standard-button purple-button">
          <a :href="project.url" class="flex items-center mx-auto font-bold">
            <span class="mr-2 text-lg"> Check me out </span>
            <span class="material-icons"> rocket_launch </span></a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";

export default {
  //   compnents: { Carousel, Slide },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.project);
  },
};
</script>

<style lang="scss">
.VueCarousel-navigation-button {
  color: white !important;
}
</style>
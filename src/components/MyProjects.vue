<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl sm:text-4xl sm:mb-6 purple-title">My projects</h1>
    <hr id="one" data-symbol="AAA" />
    <div v-for="project in projects" :key="project.title">
      <ProjectCard :project="project" />
      <hr id="one" data-symbol="AAA" />
    </div>
    <a
      href="https://github.com/Almoglem"
      target="_blank"
      class="p-2 font-bold sm:text-xl flex items-center"
      >View more of my projects in my github!
      <span class="material-icons"> output </span></a
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: { ProjectCard },
  computed: {
    ...mapGetters(["projects"]),
  },
};
</script>
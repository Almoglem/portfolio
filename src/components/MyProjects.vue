<template>
  <div>
    <h1 class="text-4xl mb-6">My projects</h1>
    <hr id="one" data-symbol="AAA" />
    <div v-for="project in projects" :key="project.title">
      <ProjectCard :project="project" />
      <hr id="one" data-symbol="AAA" />
    </div>
    <a
      href="https://github.com/Almoglem"
      target="_blank"
      class="p-2 font-bold text-xl flex items-center mx-auto"
      >Check out more of my projects in my github!
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
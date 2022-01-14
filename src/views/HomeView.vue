<template>
  <div>
    <HeroSection />
    <MyProjects class="p-20" />
    <AboutMe />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import MyProjects from "@/components/MyProjects";
import AboutMe from "@/components/AboutMe";

export default {
  name: "HomeView",
  components: { HeroSection, MyProjects, AboutMe },
};
</script>

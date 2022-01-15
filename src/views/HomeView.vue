<template>
  <div>
    <HeroSection />
    <MyProjects class="p-10 lg:p-20" />
    <AboutMe class="p-10 lg:p-20" />
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

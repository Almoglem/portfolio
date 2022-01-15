<template>
  <div>
    <HeroSection />
    <MyProjects class="p-10 lg:p-20" />
    <AboutMe class="p-10 lg:p-20" />
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import MyProjects from "@/components/MyProjects";
import AboutMe from "@/components/AboutMe";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";

export default {
  name: "HomeView",
  components: { HeroSection, MyProjects, AboutMe, SiteFooter, ScrollToTop },

  mounted() {
    const $scrollToTop = document.getElementById("scroll-to-top");
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        $scrollToTop.style.display = "block";
      } else {
        $scrollToTop.style.display = "none";
      }
    };
  },
};
</script>

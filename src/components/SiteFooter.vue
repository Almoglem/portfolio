<template>
  <div class="purple-container py-5 footer" id="footer">
    <div class="space-x-2 flex items-center justify-center">
      <button @click="openMail" class="text-2xl">
        <span class="material-icons"> email </span>
      </button>
      <button>
        <a href="https://github.com/Almoglem" target="_blank">
          <i class="devicon-github-original"></i>
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/almog-lemberg-a4180619a/">
          <i class="devicon-linkedin-plain"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMail() {
      window.open("mailto:almoglemberg@gmail.com");
    },
  },
};
</script>

<style lang="scss">
.footer {
  .material-icons,
  i {
    font-size: 32px;
    &:hover {
      color: rgb(230, 193, 193);
    }
  }
}
</style>
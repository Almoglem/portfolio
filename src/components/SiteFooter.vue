<template>
  <div class="purple-container py-5 footer" id="footer">
    <div class="space-x-2">
      <button @click="openMail" class="text-2xl">
        <span class="material-icons"> email </span>
      </button>
      <button>
        <a href="https://github.com/Almoglem" target="_blank">
          <img
            src="https://res.cloudinary.com/drinoux8s/image/upload/v1642275346/GitHub-Mark-Light-32px_isbl7r.png"
        /></a>
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
  .material-icons {
    font-size: 32px;
  }
}
</style>
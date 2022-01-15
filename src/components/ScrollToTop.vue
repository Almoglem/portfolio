<template>
  <a
    id="scroll-to-top"
    href="#header"
    class="clean-purple-button flex flex-col"
  >
    <span class="material-icons rocket"> rocket </span>
    <div>Top</div>
  </a>
</template>

<style lang="scss">
#scroll-to-top {
  .rocket {
    font-size: 30px;
  }
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  color: white;
}
</style>
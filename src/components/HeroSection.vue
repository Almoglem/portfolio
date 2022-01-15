<template>
  <section class="hero py-14 lg:py-60 flex justify-center items-center">
    <div class="profile-img-wrapper w-1/4 sm:w-1/6 mr-2 sm:mr-10">
      <img
        src="https://res.cloudinary.com/drinoux8s/image/upload/v1642196828/almog_sytlh6.png"
      />
    </div>
    <div>
      <h1 class="text-lg sm:text-3xl lg:text-6xl">Hi, I'm Almog 👋</h1>
      <div class="typewriter">
        <h3 class="text-xs sm:text-xl lg:text-3xl">A full stack developer</h3>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  background: url("https://res.cloudinary.com/drinoux8s/image/upload/v1642195297/CHE3v5_gczzh7.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    text-shadow: 2px 2px black;
  }

  .profile-img-wrapper {
    // width: 300px;
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 0px 2px 20px 17px #a55c7a52;
    }
  }
}
</style>
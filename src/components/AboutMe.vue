<template>
  <section
    class="bg-black flex flex-col items-center about-me space-y-12"
    id="about-me"
  >
    <h1 class="text-2xl sm:text-4xl purple-title">Get to know me!</h1>

    <div class="flex flex-wrap space-x-5 justify-center">
      <i class="devicon-git-plain colored"></i>
      <i class="devicon-nuxtjs-plain colored"></i>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
      />
      <i class="devicon-react-original colored"></i>
      <i class="devicon-mongodb-plain colored"></i>
      <i class="devicon-sass-original colored"></i>
      <i class="devicon-tailwindcss-plain colored"></i>
      <i class="devicon-nodejs-plain colored"></i>
      <i class="devicon-socketio-original"></i>
      <i class="devicon-docker-plain colored"></i>
    </div>

    <div
      class="
        font-dongle
        p-2
        text-2xl
        purple-border
        p-3
        md:text-3xl
        xl:w-4/5
        2xl:w-3/5
      "
    >
      <p class="mb-2">
        Iv'e always been passionate about web development, even before knowing
        what it was. funny, right? but as a little girl playing my favorite
        virtual pets game, I somehow dug into the source code and realized I can
        modify it to my liking, making it appear as I own some rare pets by
        changing the images source. aware of the changes not actually being
        saved, I was wondering if I can 'host' the outcome somewhere else where
        it can be viewd publicly.
      </p>
      <p class="mb-2">
        As a full stack developer in the present, I just love seeing my code
        come to life as functional applications or beautiful websites. I always
        seek to use the most up-to-date technologies, while keeping my code
        clean and reusable as possible. In my current role, I have developed
        complex applications using Nuxt (Vue.js), Node.js, MongoDB and
        microservice architecture.
      </p>
      <p>
        Aside from my technical skills, I'm a team player who can work well in
        cooperation with fellow developers and other teams, as well as
        independently. I'm also a fast, self-sufficient learner who can pick up
        new technologies quickly.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.about-me {
  i {
    font-size: 60px;
  }
  img {
    width: 60px;
  }
}

@media only screen and (max-width: 600px) {
  .about-me {
    i {
      font-size: 40px;
    }
    img {
      width: 40px;
    }
  }
}
</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "projects": [
      {
        "title": "Trellworks",
        "description": "TrellWorks is an end to end task management application which enables shared, live-updated team work on projects. Built in Vue, utilizing the powerful Vuex library for state management as well as a Node-JS backend with MongoDB database, complete with web sockets using socket.io to support real-time push notifications and updates.",
        "images": [
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172745/p1_ojyyps.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172868/p3_zpbp3t.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172741/p2_olkwsr.png"
        ],
        "url": "https://serene-hamlet-54538.herokuapp.com/",

      },
      {
        "title": "Appsus",
        "description": "Appsus is a frontend app that simulates email and a note keeping app. Created using non-CLI Vue.js version with no external libraries. CSS3 for styling.",
        "images": [
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172732/p1_czbfx8.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172733/p3_ljqpft.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642172732/p2_opczaf.png"
        ],
        "url": "https://almoglem.github.io/appsus/#/",

      },
      {
        "title": "Spongememe- Meme Generator",
        "description": "A spongebob themed meme generator application, allowing editing and saving images using HTML5 canvas, built using HTML5 canvas and vanilla javacsript",
        "images": [
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642174952/p2_gbfhhx.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642174953/p1_e7v68f.png",
          "https://res.cloudinary.com/drinoux8s/image/upload/v1642174953/p3_ijpnbd.png"
        ],
        "url": "https://almoglem.github.io/memegenerator/",

      },
    ],
  },
  getters: {
    projects: (state) => state.projects,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

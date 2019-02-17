import Vue from "vue"
import Router from "vue-router"

import Index from "@/templates/TEvil"
import Home from "@/templates/THome"
import About from "@/templates/TAbout"
import Contact from "@/templates/TContact"
import NotFound from "@/templates/TNotFound"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about/",
      name: "About",
      component: About,
    },
    {
      path: "/contact/",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/evilolive",
      name: "Evilolive",
      component: Index,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
    },
  ],
})

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Rent from "../rent/index.vue"
import Crowdfunding from "../crowdfunding/index.vue"
import My from "../my/index.vue"
import "../../css/reset.scss"
import "../../css/router-link.scss"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/money",
      name: "Money",
      component: Money,
    },
    {
      path: "/Rent",
      name: "Rent",
      component: Rent,
    },
    {
      path: "/Crowdfunding",
      name: "Crowdfunding",
      component: Crowdfunding,
    },
    {
      path: "/My",
      name: "My",
      component: My,
    },
  ],
})

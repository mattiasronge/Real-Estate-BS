import Vue from "vue";
import Router from "vue-router";
import Search from "./pages/Search.vue";
import Presentation from "./pages/Presentation.vue";
import ContactUs from "./pages/ContactUs.vue";
import ItemPage from "./pages/ItemPage.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

//Routing.
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/presentation"
    },
    {
      path: "/components",
      name: "Search",
      components: {default: Search, header: MainNavbar, footer: MainFooter},
      props: {
        footer: {backgroundColor: 'black'},
        header: {type: 'default', colorOnScroll: 450}
      }
    },
    {
      path: "/presentation",
      name: "presentation",
      components: {default: Presentation, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 500}}
    },
    {
      path: "/contact",
      name: "contact",
      components: {default: ContactUs, header: MainNavbar, footer: MainFooter},
      props: {footer: {type: 'default', scolorOnScroll: 450}}
    },
    {
      path: "/item/:id",
      name: "item",
      components: {default: ItemPage, header: MainNavbar, footer: MainFooter},
      props: {header: {type: 'default', colorOnScroll: 450}}
    }

  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;

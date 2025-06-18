import { createRouter,createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes =[
    {
        path:"/",
        name:"Home",
        component:Homepage

    },
     {
        path:"/about",
        name:"About",
        component:AboutPage

    },
      {
        path:"/contact",
        name:"Contact us",
        component:ContactPage

    }
]

const router = createRouter(
    {
        'history':createWebHistory(),
        routes
    })
export default router;
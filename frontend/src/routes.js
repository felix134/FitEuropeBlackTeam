import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Define the logic behind the web pages. A path in the url then matches to a vue component that is displayed in App.vue
// use "to" attribute for changing pages: <p to="/">Hi</p>
const router = new Router({
    mode: "history", // Use browser history
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./components/startPage")
        },
        {
            path: "/privacy",
            name: "privacy",
            component: () => import("./components/privacy")
        },
        {
            path: "/imprint",
            name: "imprint",
            component: () => import("./components/imprint")
        },
        ],
    // Scroll to page start, need for mobile devices
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});

export default router;
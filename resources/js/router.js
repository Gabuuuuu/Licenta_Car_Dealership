import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Home from "./pages/landing/Home";
import Team from "./pages/landing/Team";
import Prices from "./pages/landing/Prices";
import AddCar from "./components/admin/AddCar";
import Test from "./components/admin/Test";
import NotFound from "./pages/notFound.vue";
import Details from "./components/pricesec/Details";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/login", component: Login, meta: { guest: true } },
        { path: "/register", component: Register, meta: { guest: true } },
        { path: "/forgot", component: Forgot, meta: { guest: true } },
        { path: "/home", component: Home },
        { path: "/team", component: Team },
        { path: "/prices", component: Prices },
        { path: "/addcar", component: AddCar, name: "Addcar" },
        { path: "/test", component: Test },
        { path: "/details/:id", component: Details, name: "details" },

        {
            path: "/:notFound(.*)",
            component: NotFound,
        },
    ],
});

router.beforeEach((to, _) => {
    const loggedIn = !!localStorage.getItem("token");

    if (to.meta.guest && loggedIn) {
        return {
            path: "/home",
        };
    }
});

export default router;

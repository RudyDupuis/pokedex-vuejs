import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';
import Home from "./views/Home.vue";
import Pokemon from "./views/Pokemon.vue"

const routes : Array<RouteRecordRaw> = [
    {path: '/', component: Home},
    {path: '/pokemon/:id', component: Pokemon, props: true}
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
})

export default router;
import {createApp} from 'vue'
import Brands from "@/pages/Brands";
import Phones from "@/pages/Phones";
import {createWebHashHistory, createRouter} from 'vue-router';
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";

const routes = [
    {path: '/', redirect: '/brands'},
    {path: '/brands', component: Brands, props: {routable: true}},
    {path: '/phones/', component: Phones},
    {path: '/phones/:brand', component: Phones, props: true},
    {path: '/error', component: ErrorPage}
];

const router = new createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(router);
app.mount('#app');

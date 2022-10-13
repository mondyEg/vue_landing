import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Forget from './views/Forget.vue'


const routes = [
    {
        path: '/',
        name: "login",
        component: Login
    },
    {
        path: '/reg',
        name: "reg",
        component: Reg
    },
    {
        path: '/forget',
        name: "forget",
        component: Forget
    },
]
export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
})
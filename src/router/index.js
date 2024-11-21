import Vue from 'vue'
import VueRouter from 'vue-router'


const SignIn = () =>
    import ('@/views/SignIn.vue')
const SignUp = () =>
    import ('@/views/SignUp.vue')
const Main = () =>
    import ('@/views/Main.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/signUp',
        component: SignUp,
    },
    {
        path: '/',
        component: SignIn,
    },
    {
        path: '/main',
        component: Main,
    },

]


const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.NODE_ENV === 'development' ? '/' : '/',
})

export default router
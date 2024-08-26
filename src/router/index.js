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
        path: '/signIn',
        component: SignIn,
    },
    {
        path: '/main',
        component: Main,
    },

]


const router = new VueRouter({
    routes,
    base: process.env.NODE_ENV === 'development' ? '/signIn' : '/',
})

export default router
import Login from '@/views/Login.vue'

export const auth = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { layout: 'blank' }
    }
];
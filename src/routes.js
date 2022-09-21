import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Pedido from './pages/Pedido.vue'
import Pagar from './pages/Pagar.vue'
import PagoExitoso from './pages/PagoExitoso.vue'
import Factura from './pages/Factura.vue'
import FacturaExitosa from './pages/FacturaExitosa.vue'
import Metodo from './pages/Metodo.vue'
import Menu from './pages/Menu.vue'
import Cupones from './pages/Cupones.vue'
import Cuenta from './pages/Cuenta.vue'

const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/pedido',
        component: Pedido
    },

    {
        path: '/pagar',
        component: Pagar
    },

    {
        path: '/pago-exitoso',
        component: PagoExitoso
    },

    {
        path: '/factura',
        component: Factura
    },

    {
        path: '/factura-exitosa',
        component: FacturaExitosa
    },

    {
        path: '/metodo',
        component: Metodo
    },

    {
        path: '/menu',
        component: Menu
    },

    {
        path: '/cupon',
        component: Cupones
    },

    {
        path: '/cuenta',
        component: Cuenta
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
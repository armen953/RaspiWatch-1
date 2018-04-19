import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Inscription from '@/components/pages/User/Inscription'
import Connexion from '@/components/pages/User/Connexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inscription',
      name: 'signin',
      component: Inscription
    },
    {
      path: '/connexion',
      name: 'signup',
      component: Connexion
    }
  ],
  mode: 'history' // permet d'activer le mode history du navigateur !!!!!!! besoin de configurer le serveur (raspberry) si marche pas tuto sinon retirer
  // voir la doc de vue router
})

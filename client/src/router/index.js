import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Inscription from '@/components/pages/User/Inscription'
import Connexion from '@/components/pages/User/Connexion'
import Dashboard from '@/components/pages/User/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inscription',
      name: 'signin',
      component: Inscription,
      meta: {requireAuth: true, adminAuth: true}
    },
    {
      path: '/connexion',
      name: 'signup',
      component: Connexion
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
    // faire une router qui redirige les pages 404 qui sont pas trouvées
  ],
  mode: 'history' // permet d'activer le mode history du navigateur !!!!!!! besoin de configurer le serveur (raspberry) si marche pas tuto sinon retirer
  // voir la doc de vue router
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // check si utilisateur connecté: si oui laisser passer en appelant la fnc next
    console.log(JSON.parse(window.localStorage.getItem('vuex'))) // recuperer le contenu du store stocké dans le localstorage
    next()
  } else if (to.meta.adminAuth) {
    // check si l'utilsiateur est admin: si oui laisser passer en appelant la fnc next()
    next()
  } else {
    next()
  }
})
export default router

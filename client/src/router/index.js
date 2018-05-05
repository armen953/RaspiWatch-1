import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Inscription from '@/components/pages/User/Inscription'
import Connexion from '@/components/pages/User/Connexion'
import Dashboard from '@/components/pages/Dashboard'
import page404 from '@/components/pages/errorPages/page404'

import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {requireAuth: false, adminAuth: false, publicPage: false} // public page
    },
    {
      path: '/connexion',
      name: 'signup',
      component: Connexion,
      meta: {requireAuth: false, adminAuth: false, publicPage: false}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requireAuth: true, adminAuth: false, publicPage: false} // only if conncted but dont need to be admin
    },
    {
      path: '/inscription',
      name: 'signin',
      component: Inscription,
      meta: {requireAuth: true, adminAuth: true, publicPage: false} // only if connected and user is admin
    },
    {
      path: '*', // when a rout is not found (this route need to be the last item in the list)
      name: 'notFound',
      component: page404,
      meta: {publicPage: true}
    }
    // faire une router qui redirige les pages 404 qui sont pas trouvées
  ],
  mode: 'history' // permet d'activer le mode history du navigateur !!!!!!! besoin de configurer le serveur (raspberry) si marche pas tuto sinon retirer
  // voir la doc de vue router
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // check si utilisateur connecté: si oui laisser passer en appelant la fnc next
    if (isUserLogged()) {
      next()
    } else {
      next('connexion') // if user is not connected redirect to sigup page
    }
  }

  if (to.meta.adminAuth) {
    // check si l'utilsiateur est admin: si oui laisser passer en appelant la fnc next()
    if (isUserAmin()) {
      next()
    } else {
      if (isUserLogged()) {
        next('dashboard')
      } else {
        next('connexion')
      }
    }
    console.log(isUserAmin())
  }

  if (to.meta.requireAuth === false) { // when user is logged and whant visit pages like connexion or home page
    if (isUserLogged()) {
      next('dashboard')
    } else {
      next()
    }
  }

  if (to.meta.publicPage) {
    next()
  }
})

function isUserLogged () {
  return store.state.isUserLoggedIn && store.state.token != null
}

function isUserAmin () {
  return isUserLogged() && store.state.user.admin
}

export default router

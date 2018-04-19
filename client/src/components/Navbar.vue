<template>
  <div id="navbar">
    <v-navigation-drawer fixed temporary v-model="slideNav">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile :to="{name: 'home'}" >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name: 'signin'}" v-if="!$store.state.isUserLoggedIn" >
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inscription</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name: 'signup'}" v-if="!$store.state.isUserLoggedIn" >
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Connexion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="$store.state.isUserLoggedIn" @click="logout">
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Déconnexion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="red darken-1" dark>
      <v-toolbar-side-icon  @click.stop="slideNav = !slideNav" class="hidden-sm-and-up" ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Raspiwatch</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">

        <v-btn flat :to="{name: 'home'}">
          <v-icon left >dashboard</v-icon>
            Dashboard
        </v-btn>

        <v-btn flat :to="{name: 'signin'}" v-if="!$store.state.isUserLoggedIn">
          <v-icon left >face</v-icon>
            Inscription
        </v-btn>

        <v-btn flat :to="{name: 'signup'}" v-if="!$store.state.isUserLoggedIn">
          <v-icon left >lock_open</v-icon>
            Connexion
        </v-btn>

        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">
          <v-icon left >lock_outline</v-icon>
            Déconnexion
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideNav: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('disconnectUser')
      // TODO : redirect
      // this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>

</style>

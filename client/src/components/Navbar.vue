<template>
  <div id="navbar">
    <v-navigation-drawer fixed temporary v-model="slideNav">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile :to="{name: 'dashboard'}"  v-if="$store.state.isUserLoggedIn" >
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
            <v-list-tile-title>Sign in</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name: 'signup'}" v-if="!$store.state.isUserLoggedIn" >
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="$store.state.isUserLoggedIn" @click="logout">
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
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

        <v-btn flat :to="{name: 'dashboard'}" v-if="$store.state.isUserLoggedIn">
          <v-icon left >dashboard</v-icon>
            Dashboard
        </v-btn>

        <v-btn flat :to="{name: 'signin'}" v-if="!$store.state.isUserLoggedIn">
          <v-icon left >face</v-icon>
            Sign in
        </v-btn>

        <v-btn flat :to="{name: 'signup'}" v-if="!$store.state.isUserLoggedIn">
          <v-icon left >lock_open</v-icon>
            Sign up
        </v-btn>

        <!-- <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">
          <v-icon left >lock_outline</v-icon>
            Logout
        </v-btn> -->

         <v-menu bottom offset-y flat class="padding0"  v-if="$store.state.isUserLoggedIn">
          <v-btn slot="activator" flat class="btnAll" >
            <v-icon left >face</v-icon>
            {{ $store.state.isUserLoggedIn ? $store.state.user.pseudo : 'Joe' }}
          </v-btn>

          <v-list>
            <v-list-tile @click="logout">
              <v-icon left >lock_outline</v-icon>
              <v-list-tile-title> Deconnexion </v-list-tile-title>
            </v-list-tile>
          </v-list>

        </v-menu>

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
      this.$router.push({ name: 'signup' })
    }
  }
}
</script>

<style>
.menu__activator {
  display: flex;
  justify-content: center;
}

.btnAll {
  width: 100%;
}

.padding0{
  padding: 0 !important;
}

</style>

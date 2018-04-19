<template>
  <div id="navbar">
    <v-navigation-drawer fixed temporary v-model="slideNav">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
        <v-btn flat v-for="item in menuItems" :key="item.tile" :to="item.link">
          <v-icon left >{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideNav: false,
      menuItems: [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'About', icon: 'question_answer', link: '' },
        { title: 'Test', icon: 'question_answer', link: '' },
        { title: 'Inscription', icon: 'face', link: '/inscription' },
        { title: 'Connexion', icon: 'lock_open', link: '/connexion' }
      ]
    }
  }
}
</script>

<style>

</style>

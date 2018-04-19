<template>
  <div id="app">
    <v-app id="app">
      <navbar></navbar>
      <main id="main">
        <v-container fluid >
            <router-view></router-view> <!-- contenu injecté par le router -->
        </v-container >
      </main>
    </v-app>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    navbar: Navbar
  }
}
</script>

<style>
#main{
  height: 100%;
}
.container{
  height: 100%;
}
</style>

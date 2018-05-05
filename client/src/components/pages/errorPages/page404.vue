<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 flexCenter >
        <img src="@/assets/pagePasDispo.png" alt="404 page not found" class="responsiveImg">
        <v-btn color="error">A FAIRE (marche pas encore) :(</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

</script>

<style scoped>

.responsiveImg {
  width: 70%;
  height: auto;
}

.flexCenter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div id="dashboard">
    <v-layout row responsive-content>
      <v-flex xs12 sm4 flex-content >
          <v-btn large flat dark class="red darken-1">
            <v-icon>add_a_photo</v-icon>
            PRENDRE UNE PHOTO
          </v-btn>
          <v-btn large flat dark class="red darken-1">
            <v-icon>videocam</v-icon>
            PRENDRE UNE PHOTO
          </v-btn>
          <v-btn large flat dark class="red darken-1">
            <v-icon>videocam_off</v-icon>
            PRENDRE UNE PHOTO
          </v-btn>
          <v-btn large flat dark class="red darken-1">
            <v-icon>replay</v-icon>
            REDEMARER CAMERA
          </v-btn>
      </v-flex>
      <v-flex xs12 sm8>
        <v-card>
          <iframe src="https://www.youtube.com/embed/Ggq0c4e2hjA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

iframe{
  width: 100%;
  height: 400px;
}
.flex-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.icon {
  margin-right: 5%;
}

@media (max-width: 640px) {
  .responsive-content {
    flex-direction: column-reverse !important;
  }
  .flex-content {
    align-items: inherit;
  }
}

</style>

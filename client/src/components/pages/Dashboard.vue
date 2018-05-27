<template>
  <div id="dashboard">
    <v-layout row responsive-content>
      <v-flex xs12 sm4 flex-content >
          <v-btn large dark class="red darken-1">
            <v-icon>add_a_photo</v-icon>
            PRENDRE UNE PHOTO
          </v-btn>
          <v-btn large dark class="red darken-1">
            <v-icon>videocam</v-icon>
            Detection start
          </v-btn>
          <v-btn large dark class="red darken-1">
            <v-icon>videocam_off</v-icon>
            Detection stop
          </v-btn>
          <v-btn large dark class="red darken-1">
            <v-icon>replay</v-icon>
            REDEMARER CAMERA
          </v-btn>
      </v-flex>
      <v-flex xs12 sm8>
        <v-card>
          <iframe :src="cameraURL+ 'camera/flux/1'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import urlConfig from '../../../urlConfig.js'
export default {
  data () {
    return {
      cameraURL: urlConfig.cameraURL
    }
  }
}
</script>

<style scoped>

iframe{
  /* width= 800px; */
  width: 100%;
  height: 600px;
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

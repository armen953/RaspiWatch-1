<template>
  <div>
    <div class="inlineFlex">
      <h2>Contenu détecté par la caméra</h2>
      <v-spacer></v-spacer>
      <v-btn dark class="red darken-1" ><v-icon>refresh</v-icon>Recharger</v-btn>
    </div>
    <v-container grid-list-md>
      <v-layout row wrap responsive-content>
        <v-flex xs12 sm6 md4 lg3 v-for="img in images" :key="img.id">
          <v-card hover>
            <v-card-title primary-title>
              <div class="headline">{{ img.name }}</div>
            </v-card-title>
            <v-card-media :src="img.url + img.id" height="200" :contain="true">
              <a :href="img.url + img.id" v-lightbox class="lightboxLink"></a>
            </v-card-media>
            <v-card-actions class="flexCenter">
              <v-btn class="" download tag="a" :href="img.url + img.id" ><v-icon color="green">cloud_download</v-icon>Télécharger</v-btn>
              <v-btn class=""><v-icon color="red">delete_forever</v-icon>Supprimer</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from '@/components/lightbox/Lightbox'
export default {
  components: {
    Lightbox
  },
  data () {
    return {

    }
  },
  computed: {
    images () {
      return [{
        id: 1,
        name: 'Image 1',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 2,
        name: 'Image 2',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 3,
        name: 'Image 3',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 4,
        name: 'Image 4',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 5,
        name: 'Image 5',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 6,
        name: 'Image 6',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 7,
        name: 'Image 7',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }, {
        id: 8,
        name: 'Image 8',
        url: 'http://lorempicsum.com/futurama/800/640/'
      }]
    }
  }
}
</script>

<style scoped>

.lightboxLink {
  width: 100%;
  height: 100%;
}

.flexCenter {
  display: flex;
  justify-content: center;
}

.inlineFlex {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

@media (max-width: 600px) {
  .inlineFlex {
    flex-direction: column;
    align-items: center;
  }
}

</style>

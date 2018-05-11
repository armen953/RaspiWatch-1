<template>
  <div class="lightbox" v-if="image" @click="close">
    <transition :name="transitionSlide">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightboxClose" @click="close"></div>
    <div class="lightboxBtn lightboxNext" @click.stop.prevent="next"></div>
    <div class="lightboxBtn lightboxPrev" @click.stop.prevent="prev"></div>
  </div>
</template>

<script>
import './LightboxDirective'
import store from './LightboxStore'
import LightboxImage from './LightboxImage'

export default {
  components: {
    LightboxImage
  },
  data () {
    return {
      state: store.state,
      direction: 'Next'
    }
  },
  methods: {
    close () {
      store.close()
    },
    next () {
      this.direction = 'Next'
      store.next()
    },
    prev () {
      this.direction = 'Prev'
      store.prev()
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.group][this.state.index]
      }
    },
    transitionSlide () {
      return 'lightbox' + this.direction
    }
  }
}
</script>

<style lang="scss" src="./assets/lightbox.scss"></style>

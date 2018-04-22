<template lang="html">
  <div>
    <Header />
    <Slider />
    <Novice />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from "./hslider.vue"
import Novice from './novice.vue'

export default {
  components: {
    Header,
    Slider,
    Novice
  }
}
</script>

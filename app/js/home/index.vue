<template lang="html">
  <div>
    <Header />
    <Slider />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from "./hslider.vue"
export default {
  components: {
    Header,
    Slider
  }
}
</script>

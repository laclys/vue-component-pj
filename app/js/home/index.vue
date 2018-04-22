<template lang="html">
  <div>
    <Header />
    <Slider />
    <Novice />
    <Borrow />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from "./hslider.vue"
import Novice from './novice.vue'
import Borrow from './borrow.vue';

export default {
  components: {
    Header,
    Slider,
    Novice,
    Borrow
  }
}
</script>

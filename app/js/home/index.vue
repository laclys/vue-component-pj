<template lang="html">
  <div>
    <Header />
    <Slider />
    <Novice />
    <Borrow />
    <Money />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Slider from "./hslider.vue"
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'

export default {
  components: {
    Header,
    Slider,
    Novice,
    Borrow,
    Money
  }
}
</script>

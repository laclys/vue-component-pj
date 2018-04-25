<template lang="html">
  <div>
    <Header />
    <div :class="$style.nothing" />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'

export default {
  components: {
    Header,
    Footer,
    Navbar
  }
}
</script>

<style lang="scss" module>
  .nothing{
    width: 100%;
    height: 500px;
  }
</style>

<template lang="html">
  <div>
    <Header />
    <Slider />
    <Novice />
    <Borrow />
    <Money />
    <Product />
    <Car />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Footer from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Slider from "./hslider.vue"
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product'
import Car from './car'

export default {
  components: {
    Header,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Car,
    Footer,
    Navbar
  }
}
</script>

<template>
  <div class="appp">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .appp {
    background:  rgb(219, 194, 156);
  }
</style>

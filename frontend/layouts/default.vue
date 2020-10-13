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
    background: rgb(249,222,181);
    background: linear-gradient(90deg, rgba(249,222,181,1) 19%, rgba(236,196,135,1) 50%, rgba(181,166,141,1) 100%);
  }
</style>

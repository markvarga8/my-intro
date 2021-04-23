<template>
  <div class="appp">
    <!-- <VueScrollProgress></VueScrollProgress> -->
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: #f4f4f4 !important;
}

#progress-el {
  /* progress bar */
  background-color: black !important;
}
</style>

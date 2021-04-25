<template>
  <div class="home">
    <mdb-row class="page row">
      <mdb-col
        md="6"
        xs="12"
        class="container half-page column"
        data-aos="fade-down-right"
        data-aos-duration="2200">
        <h1 class="heading display-3 heading-animation">
          {{ $t('name') }}
        </h1>
        <h2 class="pb-5 subheading font-weight-bold">
          {{ $t('free') }}
        </h2>
        <mdb-icon icon="angle-double-down" class="icolor bottom-left animated bounce infinite fa-3x" />
        <mdb-icon icon="angle-double-down" class="icolor bottom-right animated bounce infinite fa-3x" />
        <mdb-icon icon="angle-double-down" class="icolor bottom-center animated bounce infinite fa-3x" />
      </mdb-col>
      <mdb-col
        class="column"
        md="6"
        xs="0"
        data-aos="fade-down-left"
        data-aos-duration="2200">
        <mdb-view>
          <img class="image" src="../assets/images/background2.jpg">
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <div class="parallax" />

    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>

    <mdb-container>
      <mdb-container class="max">
        <section>
          <h2 class="h1-responsive font-weight-bold text-center my-5">
            {{ $t('help') }}
          </h2>
          <p class="textColor lead w-responsive text-center mx-auto mb-5">
            {{ $t('intro') }}
          </p>
          <mdb-row>
            <mdb-col md="4">
              <mdb-row class="mb-3">
                <mdb-col class="iconMargin" size="3">
                  <mdb-icon icon="flag-checkered" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('exp') }}
                  </h5>
                  <p class="textColor">
                    {{ $t('content1') }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col class="iconMargin" size="3">
                  <mdb-icon icon="flask" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('agile') }}
                  </h5>
                  <p class="textColor">
                    {{ $t('content2') }}
                  </p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4" class="text-name imageMargin">
              <img class="phone img-fluid" src="../assets/images/iphone.png" alt="Sample image">
            </mdb-col>
            <mdb-col md="4">
              <mdb-row class="mb-3">
                <mdb-col class="iconMargin" size="2">
                  <mdb-icon icon="magic" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('website') }}
                  </h5>
                  <p class="textColor">
                    {{ $t('content3') }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col class="iconMargin" size="2">
                  <mdb-icon icon="mobile-alt" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('mobile') }}
                  </h5>
                  <p class="textColor">
                    {{ $t('content4') }}
                  </p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr color="white" class="my-5">

      <mdb-container class="max">
        <section class="my-5">
          <h2 class="servMargin h1-responsive font-weight-bold text-center my-5">
            {{ $t('serv') }}
          </h2>
          <mdb-row class="skills">
            <mdb-col md="6" class="md-0 mb-5">
              <mdb-row>
                <mdb-col lg="2" md="3" size="2">
                  <mdb-icon icon="user" size="2x" />
                </mdb-col>
                <mdb-col lg="10" md="9" size="10">
                  <h4 class="font-weight-bold">
                    {{ $t('skillsTitle1') }}
                  </h4>
                  <p class="textColor">
                    {{ $t('entreContent') }}
                  </p>
                  <button class="btn btn--white btn--animated" @click="entrepeneur = true">
                    {{ $t('welcome') }}
                  </button>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="6" class="md-0 mb-5">
              <mdb-row>
                <mdb-col lg="2" md="3" size="2">
                  <mdb-icon icon="tachometer-alt" size="2x" />
                </mdb-col>
                <mdb-col lg="10" md="9" size="10">
                  <h4 class="font-weight-bold">
                    {{ $t('skillsTitle2') }}
                  </h4>
                  <p class="textColor">
                    {{ $t('indiContent') }}
                  </p>
                  <button class="btn btn--white btn--animated" @click="individual = true">
                    {{ $t('welcome') }}
                  </button>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr color="white" class="my-5">

      <mdb-container class="max">
        <section class="text-center my-5">
          <mdb-row>
            <mdb-row class="intro">
              <mdb-col md="4" class="md-0 mb-4">
                <mdb-card v-animateOnScroll="{animation: 'bounceInLeft'}" class="card-image-individuall">
                  <a href="/about">
                    <div class="text-white rgba-black-strong">
                      <div class="hei">
                        <h3 class="py-3 font-weight-bold">
                          <strong class="titleSize">
                            {{ $t('about') }}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </a>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="md-0 mb-4">
                <mdb-card v-animateOnScroll="{animation: 'bounceInDown'}" class="card-image-entrepeneurr">
                  <a href="/portfolio">
                    <div class="text-white rgba-black-strong">
                      <div class="hei">
                        <h3 class="py-3 font-weight-bold textC">
                          <strong class="titleSize">
                            {{ $t('portfolio') }}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </a>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="md-0 mb-4">
                <mdb-card v-animateOnScroll="{animation: 'bounceInRight'}" class="card-image-contact">
                  <a href="/contacts">
                    <div class="text-white rgba-black-strong">
                      <div class="hei">
                        <h3 class="py-3 font-weight-bold">
                          <strong class="titleSize">
                            {{ $t('contact') }}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </a>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-row>
        </section>
      </mdb-container>

      <mdb-container>
        <mdb-modal
          :show="entrepeneur"
          @close="entrepeneur = false"
        >
          <mdb-modal-header class="headerColor">
            <p class="modalHeading">
              {{ $t('skillsTitle2') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row class="imgCenter">
              <mdb-column col="5">
                <img src="../assets/images/hand.jpg" class="img-fluid" alt="">
              </mdb-column>
              <mdb-column class="mt-2" col="7">
                <p style="color: black">
                  {{ $t('entrepreneurIntro') }}
                </p>
                <a href="/about">
                  <button class="btn btn--white btn--animated">
                    {{ $t('about') }}
                  </button>
                </a>
                <a href="/portfolio">
                  <button class="btn btn--white btn--animated">
                    {{ $t('portfolio') }}
                  </button>
                </a>
              </mdb-column>
            </mdb-row>
          </mdb-modal-body>
        </mdb-modal>
      </mdb-container>

      <mdb-container>
        <mdb-modal
          :show="individual"
          @close="individual = false"
        >
          <mdb-modal-header class="headerColor">
            <p class="modalHeading">
              {{ $t('skillsTitle1') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row class="imgCenter">
              <mdb-column col="5">
                <img src="../assets/images/company.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
              </mdb-column>
              <mdb-column class="mt-2" col="7">
                <p style="color: black">
                  {{ $t('individualIntro') }}
                </p>
                <a href="/about">
                  <button class="btn btn--white btn--animated">
                    {{ $t('about') }}
                  </button>
                </a>
                <a href="/portfolio">
                  <button class="btn btn--white btn--animated">
                    {{ $t('portfolio') }}
                  </button>
                </a>
              </mdb-column>
            </mdb-row>
          </mdb-modal-body>
        </mdb-modal>
      </mdb-container>
      <a
        id="back-to-top"
        href="#"
        class="sticky back-to-top textColor"
      >
        <mdb-icon icon="angle-double-up" class="fa-3x" />
      </a>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbCol, mdbRow, mdbView, animateOnScroll, mdbCard } from 'mdbvue'
import { mapState } from 'vuex'

export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbCol,
    mdbRow,
    mdbView,
    mdbIcon,
    mdbContainer,
    mdbCard
  },
  directives: {
    animateOnScroll
  },
  data: () => ({
    frontend: false,
    backend: false,
    individual: false,
    entrepeneur: false,
    loading: false,
    selection: 1
  }),
  computed: mapState({
    en: state => state.LangModule.en,
    hu: state => state.LangModule.hu
  }),
  created () {
    if (!this.en) {
      this.$i18n.locale = 'hu'
    } else {
      this.$i18n.locale = 'en'
    }
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
  head () {
    return {
      title: 'Mark Varga',
      meta: [
        {
          hid: 'home',
          name: 'home',
          content: 'introduction mark varga'
        }
      ]
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="home">
    <mdb-row class="page row">
      <mdb-col md="6" xs="12" class="container half-page column animated fadeInLeft">
        <h1 class="heading display-3">
          {{ $t('name') }}
        </h1>
        <h2 class="pb-5 subheading font-weight-bold">
          {{ $t('free') }}
        </h2>
        <mdb-icon icon="angle-double-down" class="icolor bottom-left animated bounce infinite fa-3x" />
        <mdb-icon icon="angle-double-down" class="icolor bottom-right animated bounce infinite fa-3x" />
        <mdb-icon icon="angle-double-down" class="icolor bottom-center animated bounce infinite fa-3x" />
      </mdb-col>
      <mdb-col class="column" md="6" xs="12">
        <mdb-view>
          <img class="image animated fadeInDown" src="../assets/images/background2.jpg">
          <mdb-mask flex-center class="hm-gradient" />
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <mdb-container>
      <mdb-container class="max">
        <section>
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="h1-responsive font-weight-bold text-center my-5">
            {{ $t('help') }}
          </h2>
          <p v-animateOnScroll="{animation: 'bounceInDown'}" class="textColor lead w-responsive text-center mx-auto mb-5">
            {{ $t('intro') }}
          </p>
          <mdb-row>
            <mdb-col md="4">
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
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
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
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
              <img v-animateOnScroll="{animation: 'bounceInDown'}" class="phone img-fluid" src="../assets/images/iphone.png" alt="Sample image">
            </mdb-col>
            <mdb-col md="4">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
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
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
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
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col class="iconMargin" size="2">
                  <mdb-icon icon="align-justify" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('contentManagment') }}
                  </h5>
                  <p class="textColor">
                    {{ $t('content5') }}
                  </p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">

      <mdb-container class="max">
        <section class="my-5">
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="servMargin h1-responsive font-weight-bold text-center my-5">
            {{ $t('serv') }}
          </h2>
          <mdb-row class="skills">
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" md="6" class="md-0 mb-5">
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
                  <mdb-btn color="lily" size="sm" @click.native="entrepeneur = true">
                    {{ $t('welcome') }}
                  </mdb-btn>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col v-animateOnScroll="{animation: 'bounceInRight'}" md="6" class="md-0 mb-5">
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
                  <mdb-btn color="lily" size="sm" @click.native="individual = true">
                    {{ $t('welcome') }}
                  </mdb-btn>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">

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
            <p class="heading">
              {{ $t('skillsTitle2') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row class="imgCenter">
              <mdb-column col="5">
                <img src="../assets/images/hand.jpg" class="img-fluid" alt="">
              </mdb-column>
              <mdb-column col="7">
                <p>
                  {{ $t('entrepreneurIntro') }}
                </p>
                <a href="/about">
                  <mdb-btn color="lily">
                    {{ $t('about') }}
                  </mdb-btn>
                </a>
                <a href="/portfolio">
                  <mdb-btn color="lily">
                    {{ $t('portfolio') }}
                  </mdb-btn>
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
            <p class="heading">
              {{ $t('skillsTitle1') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row class="imgCenter">
              <mdb-column col="5">
                <img src="../assets/images/company.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
              </mdb-column>
              <mdb-column col="7">
                <p>
                  {{ $t('individualIntro') }}
                </p>
                <a href="/about">
                  <mdb-btn color="lily">
                    {{ $t('about') }}
                  </mdb-btn>
                </a>
                <a href="/portfolio">
                  <mdb-btn color="lily">
                    {{ $t('portfolio') }}
                  </mdb-btn>
                </a>
              </mdb-column>
            </mdb-row>
          </mdb-modal-body>
        </mdb-modal>
      </mdb-container>
      <a
        id="back-to-top"
        href="#"
        class="sticky btn back-to-top textC"
      >
        <mdb-icon icon="angle-double-up" class="fa-3x" />
      </a>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbBtn, mdbCol, mdbRow, mdbView, mdbMask, animateOnScroll, mdbCard } from 'mdbvue'
import { mapState } from 'vuex'

export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbBtn,
    mdbCol,
    mdbRow,
    mdbView,
    mdbMask,
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
    loading: false
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

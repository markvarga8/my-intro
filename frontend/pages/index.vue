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
          <img class="image animated fadeInDown" src="../assets/images/background.jpg">
          <mdb-mask flex-center class="hm-gradient" />
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <div id="intro" />

    <no-ssr placeholder="loading..." />

    <mdb-container>

      <mdb-container>
        <section class="my-5">
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="h1-responsive font-weight-bold text-center my-5">
            {{ $t('help') }}
          </h2>
          <p v-animateOnScroll="{animation: 'bounceInDown'}" class="lead grey-text w-responsive text-center mx-auto mb-5">
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
                  <p class="grey-text">
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
                  <p class="grey-text">
                    {{ $t('content2') }}
                  </p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4" class="text-name imageMargin">
              <img v-animateOnScroll="{animation: 'bounceInDown'}" class="phone img-fluid" src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="Sample image">
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
                  <p class="grey-text">
                    {{ $t('content3') }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col class="iconMargin" size="2">
                  <mdb-icon icon="heart" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('mobile') }}
                  </h5>
                  <p class="grey-text">
                    {{ $t('content4') }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col class="iconMargin" size="2">
                  <mdb-icon icon="bolt" size="2x" />
                </mdb-col>
                <mdb-col size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('contentManagment') }}
                  </h5>
                  <p class="grey-text">
                    {{ $t('content5') }}
                  </p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

      <mdb-container>
        <section class="my-5">
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="h1-responsive font-weight-bold text-center my-5">
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
                    {{ $t('skillsTitle2') }}
                  </h4>
                  <p class="grey-text">
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
                    {{ $t('skillsTitle1') }}
                  </h4>
                  <p class="grey-text">
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

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

      <mdb-container>
        <section class="my-5">
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="h1-responsive font-weight-bold text-center my-5">
            {{ $t('skills') }}
          </h2>
          <mdb-row>
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" lg="5" class="text-center text-lg-left">
              <img class="img-fluid animated fadeInDown" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image">
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    HTML/CSS/JavaScript
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Vue.js/Nuxt.js (Vuex)
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Bootstrap/Bootstrap-vue
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Vuetify
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Node.js
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    NPM
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Express.js
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    MySQL
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Sequelize (ORM)
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    REST
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('methodology') }}
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('agilep') }}
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('command') }}
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    {{ $t('local') }}
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'flip'}" class="mb-3">
                <mdb-col size="1">
                  <mdb-icon icon="angle-double-right" size="lg" class="mb-3 mt-3 animated bounceInLeft infinite" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <a href="/about"><mdb-btn color="lily">{{ $t('about') }}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <mdb-container>
        <mdb-modal
          :show="entrepeneur"
          removeBackdrop
          side
          position="bottom-left"
          info
          @close="entrepeneur = false"
        >
          <mdb-modal-header>
            <p class="heading">
              {{ $t('skillsTitle2') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row>
              <mdb-column col="5">
                <img src="../assets/images/hand.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
              </mdb-column>
              <mdb-column col="7">
                <p>
                  {{ $t('modal1') }}
                </p>
                <a href="/about">
                  <mdb-btn color="primary">
                    {{ $t('about') }}
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
          side
          position="bottom-right"
          removeBackdrop
          info
          @close="individual = false"
        >
          <mdb-modal-header>
            <p class="heading">
              {{ $t('skillsTitle1') }}
            </p>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-row>
              <mdb-column col="5">
                <img src="../assets/images/company.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
              </mdb-column>
              <mdb-column col="7">
                <p>
                  {{ $t('modal2') }}
                </p>
                <a href="/about">
                  <mdb-btn color="primary">
                    {{ $t('about') }}
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
        class="sticky btn back-to-top"
      >
        <mdb-icon icon="angle-double-up" class="fa-3x" />
      </a>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbBtn, mdbCol, mdbRow, mdbView, mdbMask, animateOnScroll } from 'mdbvue'
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
    mdbContainer
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

html {
  scroll-behavior: smooth;
}

  .button-background {
    background: rgb(82, 73, 73);
    color: white;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  .skills {
    height: 20%;
  }

  .image {
    width: 100%;
    height: 100vh !important;
  }

  .help {
    margin-top: 10%;
  }

  /* Bottom left */
  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

  .bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }

  .bottom-center {
    position: absolute;
    bottom: 8px;
    right: 50%;
  }

  .icolor {
    color: rgb(82, 73, 73);
  }

  .iconMargin {
    margin-right: -160px;
  }

  .imageMargin {
    margin-right: -50px;
  }

  .sticky {
    float:right;
    width: 80px;
    background: rgba(219, 194, 156, 0);
    border: 3px solid black;
    position: sticky;
    bottom: 20px;
  }

  @media screen and (max-width: 800px) {
      .phone {
        display: none;
      }
    }
</style>

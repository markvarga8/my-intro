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

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

      <mdb-container class="max">
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
                    {{ $t('skillsTitle1') }}
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

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

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
                          <strong class="titleSize">{{$t('about')}}</strong>
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
                          <strong class="titleSize">{{$t('portfolio')}}</strong>
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
                          <strong class="titleSize">{{$t('contact')}}</strong>
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
            <mdb-row>
              <mdb-column col="5">
                <img src="../assets/images/hand.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
              </mdb-column>
              <mdb-column col="7">
                <p>
                  {{$t('entrepreneurIntro')}}
                </p>
                <a href="/about">
                  <mdb-btn color="lily">
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
          @close="individual = false"
        >
          <mdb-modal-header class="headerColor">
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
                  {{$t('individualIntro')}}
                </p>
                <a href="/about">
                  <mdb-btn color="lily">
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

html {
  scroll-behavior: smooth;
}

  .max {
    max-width: 100vw !important;
    overflow: hidden !important;
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
    color: black;
  }

  .iconMargin {
    margin-right: -160px;
  }

  .imageMargin {
    margin-right: -50px;
  }

  .sticky {
    display: block;
    width: 80px;
    background: rgba(219, 194, 156, 0);
    border: 1px solid black;
    position: sticky;
    bottom: 20px;
    margin-left: 105%;
  }

  .sticky:hover {
    border: 5px solid black;
  }

  .headerColor {
    background: #83a4d4;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #b6fbff, #83a4d4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .card-image-entrepeneurr {
    background-image: url('../assets/images/portfolio.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    opacity: 1;
  }

   .card-image-entrepeneurr:hover {
     opacity: 0.8;
  }

   .card-image-entrepeneurr a {
    text-decoration: none !important;
  }

  .card-image-individuall {
    background: rgb(187,186,212);
    background: linear-gradient(90deg, rgba(187,186,212,1) 0%, rgba(34,34,230,1) 35%, rgba(0,212,255,1) 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    opacity: 1;
  }

   .card-image-individuall:hover {
    opacity: 0.8;
  }

  .card-image-individuall a {
    text-decoration: none !important;
  }

  .card-image-contact {
    background-image: url('../assets/images/contact.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    opacity: 1;
  }

  .card-image-contact:hover {
    opacity: 0.8;
  }

  .card-image-contact a {
    text-decoration: none !important;
  }

   .intro {
    height: 20%;
    width: 100%;
  }

  .hei {
    height: 15rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hei:hover {
  }

  .textColor {
    color: black;
  }

  .heading {
      font-weight: 700;
      color:  black !important;
    }

  @media screen and (max-width: 1400px) {
      .phone {
        display: none;
      }

      .sticky {
        margin-left: 78%;
        width: 60px;
      }
  }

   @media screen and (max-width: 770px) {
     .half-page {
        padding-top: 20%;
      }
   }
</style>

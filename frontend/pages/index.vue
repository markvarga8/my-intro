<template>
  <div class="home">

    <mdb-row class="page row">
      <mdb-col md="6" xs="12" class="half-page column animated fadeInLeft">
        <h1 class="heading display-3">{{$t('name')}}</h1>
        <h2 class="subheading font-weight-bold">{{$t('free')}}</h2>
        <a href="#intro"><mdb-btn rounded icon="caret-right" icon-right color="lily">{{$t('welcome')}}</mdb-btn></a>
      </mdb-col>
      <mdb-col class="column" md="6" xs="12">
        <mdb-view>
        <img class="image animated fadeInDown" src="../assets/images/background.jpg" >
        <mdb-mask flex-center class="hm-gradient" />
        </mdb-view>
      </mdb-col>
    </mdb-row>

    <div id="intro"></div>

    <no-ssr placeholder="loading...">
    </no-ssr>

    <mdb-container>
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">{{$t('help')}}</h2>
        <p class="lead grey-text w-responsive text-center mx-auto mb-5">{{$t('intro')}}</p>
        <mdb-row>
          <mdb-col md="4">
            <mdb-row class="mb-3">
              <mdb-col size="3">
                <mdb-icon icon="flag-checkered" size="2x"/>
              </mdb-col>
              <mdb-col size="10">
                <h5 class="font-weight-bold mb-3">{{$t('exp')}}</h5>
                <p class="grey-text">
                  {{$t('content1')}}
                </p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="3">
                <mdb-icon icon="flask" size="2x"/>
              </mdb-col>
              <mdb-col size="10">
                <h5 class="font-weight-bold mb-3">{{$t('agile')}}</h5>
                <p class="grey-text">
                  {{$t('content2')}}
                </p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col md="4" class="text-name">
            <img class="img-fluid" v-animateOnScroll="{animation: 'bounceInLeft'}" src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="Sample image" />
          </mdb-col>
          <mdb-col md="4">
            <mdb-row class="mb-3">
              <mdb-col size="2">
                <mdb-icon icon="magic" size="2x"/>
              </mdb-col>
              <mdb-col size="10">
                <h5 class="font-weight-bold mb-3">{{$t('website')}}</h5>
                <p class="grey-text">{{$t('content3')}}</p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="2">
                <mdb-icon icon="heart" size="2x"/>
              </mdb-col>
              <mdb-col size="10">
                <h5 class="font-weight-bold mb-3">{{$t('mobile')}}</h5>
                <p class="grey-text">{{$t('content4')}}</p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="2">
                <mdb-icon icon="bolt" size="2x"/>
              </mdb-col>
              <mdb-col size="10">
                <h5 class="font-weight-bold mb-3">{{$t('contentManagment')}}</h5>
                <p class="grey-text">{{$t('content5')}}</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>

    <mdb-container>
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">{{$t('serv')}}</h2>
        <mdb-row class="skills">
          <mdb-col md="6" class="md-0 mb-5">
            <mdb-row>
              <mdb-col lg="2" md="3" size="2">
                <mdb-icon icon="users" size="2x"/>
              </mdb-col>
              <mdb-col lg="10" md="9" size="10">
                <h4 class="font-weight-bold">{{$t('skillsTitle2')}}</h4>
                <p class="grey-text">{{$t('entreContent')}}</p>
                <mdb-btn @click.native="entrepeneur = true" color="lily" size="sm">{{$t('welcome')}}</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col md="6" class="md-0 mb-5">
            <mdb-row>
              <mdb-col lg="2" md="3" size="2">
                <mdb-icon icon="tachometer-alt" size="2x"/>
              </mdb-col>
              <mdb-col lg="10" md="9" size="10">
                <h4 class="font-weight-bold">{{$t('skillsTitle1')}}</h4>
                <p class="grey-text">
                  {{$t('indiContent')}}
                </p>
                <mdb-btn @click.native="individual = true" color="lily" size="sm">{{$t('welcome')}}</mdb-btn>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>

    <mdb-container>
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">{{$t('skills')}}</h2>
        <mdb-row>
          <mdb-col lg="5" class="text-center text-lg-left">
            <img class="img-fluid animated fadeInDown" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
          </mdb-col>
          <mdb-col lg="7">
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">HTML/CSS/JavaScript</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Vue.js/Nuxt.js (Vuex)</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Bootstrap/Bootstrap-vue</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Vuetify</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Github</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">NPM</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Node.js</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Express.js</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">MySql</h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col size="1">
                <mdb-icon icon="share" size="lg" class="mb-3 mt-3"/>
              </mdb-col>
              <mdb-col xl="10" md="11" size="10">
                <h5 class="font-weight-bold mb-3">Sequelize (ORM)</h5>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>

    <mdb-container>
      <mdb-modal
        :show="entrepeneur"
        @close="entrepeneur = false"
        removeBackdrop
        side
        position="bottom-left"
        info>
        <mdb-modal-header>
          <p class="heading">{{$t('skillsTitle2')}}</p>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-row>
            <mdb-column col="5">
              <img src="../assets/images/hand.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
            </mdb-column>
            <mdb-column col="7">
              <p>
                Akár egy egy oldalas bemutatkozó weboldalra van szükséged, akár egy komolyabb,
                saját ötleteid szerint összerakott weboldalra, nyugodtan fordulj hozzám és írj! [...]
              </p>
              <mdb-btn color="primary">{{$t('welcome')}}</mdb-btn>
            </mdb-column>
          </mdb-row>
        </mdb-modal-body>
      </mdb-modal>
    </mdb-container>

    <mdb-container>
      <mdb-modal
        :show="individual"
        @close="individual = false"
        removeBackdrop
        side
        position="bottom-right"
        info>
        <mdb-modal-header>
          <p class="heading">{{$t('skillsTitle1')}}</p>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-row>
            <mdb-column col="5">
              <img src="../assets/images/company.jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
            </mdb-column>
            <mdb-column col="7">
              <p>
                Mai világba már gyakorlatilag kihagyott ziccernek számít, ha egy vállalkozó esetleg nincs jelen az internet szerteágazó világába,
                ami rengeteg lehetőséget biztosít a termékek és szolgáltatások bemutatására, reklámozására.
              </p>
              <mdb-btn color="primary">{{$t('welcome')}}</mdb-btn>
            </mdb-column>
          </mdb-row>
        </mdb-modal-body>
      </mdb-modal>
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
  created () {
    if (!this.en) {
      this.$i18n.locale = 'hu'
    } else {
      this.$i18n.locale = 'en'
    }
  },
  computed: mapState({
    en: state => state.LangModule.en,
    hu: state => state.LangModule.hu
  }),
  data: () => ({
    frontend: false,
    backend: false,
    individual: false,
    entrepeneur: false,
    loading: false
  }),
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
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Hind&display=swap');

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
</style>>

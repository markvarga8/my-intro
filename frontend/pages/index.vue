<template>
  <div class="home">

    <div class="container-img">
      <img class="background" src="../assets/images/background.jpg" alt="">
      <b-icon class="centered-icon" icon="arrow-down-square-fill" animation="cylon-vertical" font-scale="5"></b-icon>
      <b-card
        tag="article"
        class="centered w-50"
      >
        <b-card-text class="text">
          {{$t('free')}}
        </b-card-text>
        <hr class="hr" />
        <h3>{{$t('name')}}</h3>
        <b-spinner v-if="loading" style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
      </b-card>
    </div>

    <no-ssr placeholder="loading...">
    </no-ssr>

    <div class="card-intro">
      <b-card class="card-intro-card mx-auto w-75"> <!-- Megváltoztatni -->
        <h3>{{$t('name')}}</h3>
        <b-card-text>
          "Agilis fejlesztési szemléletemnek közönhetően az ügyfél, az az te leszel központban, akármiről is legyen szó"
        </b-card-text>
        <b-card-text></b-card-text>
        <b-button href="#" class="button-background" variant="outline">{{$t('about')}}</b-button>
        <b-button href="#message" class="button-background" variant="outline">{{$t('message')}}</b-button>
      </b-card>
    </div>

    <div class="b-card-sz mx-auto">
      <h3>{{$t('serv')}}</h3>
    </div>

    <b-container class="skills mx-auto">
      <b-card
        img-src="../assets/images/hand.jpg"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-5 mr-5 w-75 skillsCard"
      >
        <h3>{{$t('skillsTitle2')}}</h3>

        <b-button @click.native="individual = true" class="button-background" href="#" variant="outline">{{$t('welcome')}}</b-button>
      </b-card>

      <b-card
        img-src="../assets/images/company.jpg"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-5 w-75 skillsCard"
      >
        <h3>{{$t('skillsTitle1')}}</h3>

        <b-button @click.native="entrepeneur = true" class="button-background" href="#" variant="outline">{{$t('welcome')}}</b-button>
      </b-card>
    </b-container>

    <div class="b-card-sz mx-auto">
      <h3>{{$t('skills')}}</h3>
    </div>

    <b-container class="b-card-container mx-auto">
      <b-card
        class="b-card mr-5 mb-5 w-50"
        overlay
        img-src="../assets/images/frontend.jpg"
        img-alt="Card Image"
        text-variant="white"
      >
        <h3>{{$t('frontend')}}</h3>
        <mdb-btn class="button-background" @click.native="frontend = true">{{$t('more')}}</mdb-btn>
      </b-card>
      <b-card
        class="b-card mb-5 w-50 mr-5"
        overlay
        img-src="../assets/images/backend.jpg"
        img-alt="Card Image"
        text-variant="white"
      >
        <h3>{{$t('backend')}}</h3>
        <mdb-btn class="button-background" @click.native="backend = true">{{$t('more')}}</mdb-btn>
      </b-card>
    </b-container>

    <mdb-modal :show="individual" @close="individual = false">
      <mdb-modal-header>
        <mdb-modal-title>{{$t('skillsTitle2')}}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <h3>
          Aki magánszemélyként a munkaerőpiacon komolyan gondolja a sikerességet az egy másodpercig sem gondolkodik azon,
          hogy szükség van-e online portfolióra vagy sem!
        </h3>
        <hr>
        <h3>
          Akár egy egy oldalas bemutatkozó weboldalra van szükséged, akár egy komolyabb,
          saját ötleteid szerint összerakott weboldalra, nyugodtan fordulj hozzám és írj!
        </h3>
        <hr>
        <h3>Tartalomkezelést vagy átalakítást is vállalok, szóval ha nem vagy elégedett a jelenlegivel akkor is nyugodtan keress meg!</h3>
        <hr>
        <h3>Agilis fejlesztési szemléletemnek köszönhetően a végeredmény garantáltan olyan lesz mint amilyennek te elképzelted!</h3>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn class="button-background" color="outline" @click.native="individual = false">{{$t('close')}}</mdb-btn>
        <b-button href="/contacts" class="button-background" variant="outline">{{$t('welcome')}}</b-button>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-modal :show="entrepeneur" @close="entrepeneur = false">
      <mdb-modal-header>
        <mdb-modal-title>{{$t('skillsTitle1')}}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <h3>
          Mai világba már gyakorlatilag kihagyott ziccernek számít, ha egy vállalkozó esetleg nincs jelen az internet szerteágazó világába,
          ami rengeteg lehetőséget biztosít a termékek és szolgáltatások bemutatására, reklámozására.
        </h3>
        <hr>
        <h3>
         Ennek a szerteágazó világnak az egyik nagyon hasznos hozományai a weboldalak/webalkalmazások,
         amellyelekkel ma már rengeteg ügyfélhez juttathatjuk el információinkat vállalkozásunkról. <!-- szerteágazó, sokat árulnak el...  -->
        </h3>
        <hr>
        <h3>
          Ebben lehetek én a segítségedre! Legyen szó egy teljesen új,
          a nulláról felépítendő webalkalmazásról, vagy lehet szó már meglévőről, ahol tartalomkezelésben vagy átalakításban is segíthetek neked!.
        </h3>
        <hr>
        <h3>
          Agilis fejlesztési szemléletemnek köszönhetően a végeredmény garantáltan olyan lesz mint amilyennek te elképzelted!
        </h3>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn class="button-background" color="outline" @click.native="entrepeneur = false">{{$t('close')}}</mdb-btn>
        <b-button href="/contacts" class="button-background" variant="outline">{{$t('welcome')}}</b-button>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-modal :show="frontend" @close="frontend = false">
      <mdb-modal-header>
        <mdb-modal-title>{{$t('frontend')}}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Vue.js</li>
          <li>Vuex, Vue-router</li>
          <li>Nuxt.js</li>
          <li>Vuetify</li>
          <li>Bootstrap-vue</li>
          <li>Git</li>
        </ul>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn class="button-background" color="outline" @click.native="frontend = false">{{$t('close')}}</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-modal :show="backend" @close="backend = false">
      <mdb-modal-header>
        <mdb-modal-title>{{$t('backend')}}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Mysql</li>
          <li>Sequelize</li>
          <li>MVC structure</li>
          <li>REST applications</li>
          <li>ORM</li>
        </ul>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn class="button-background" color="outline" @click.native="backend = false">{{$t('close')}}</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <div id="message"></div>
  </div>
</template>

<script>
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue'
import { mapState } from 'vuex'

export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
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

  .home {
    background:  rgb(219, 194, 156);
  }

  .hr {
    background: white !important;
  }

  .container-img .button-background {
    width: 20%;
    height: 10%;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .container-img img {
    position: relative;
    text-align: center;
    color: white;
  }

  .centered {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:  rgba(82, 73, 73, 0.767);
    color: white !important;
    text-align: center;
    border: 1px solid white;
    font-family: 'Bebas Neue', cursive;
  }

  .centered .text {
    color: white !important;
    font-size: 1.3rem !important;
  }

  .centered-icon {
    position: absolute;
    top: 85%;
    left: 48%;
    transform: translate(-50%, -50%);
    color: rgba(82, 73, 73, 0.767);
  }

  .background {
    width: 100%;
    height: 100vh;
  }

  .slide {
    z-index: -1;
  }

  .card-intro {
    text-align: center;
    margin-left: 60px;
    margin-top: 70px;
    margin-bottom: 50px;
    font-family: 'Bebas Neue', cursive;
  }

  .card-intro h4 {
    font-weight: 800;
  }

  .card-intro-card {
    background: rgb(82, 73, 73);
    color: white;
  }

  .skills {
    display: flex;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
  }

  .skills img {
    height: 60%;
  }

  .skills .skillsCard {
    background:  rgb(82, 73, 73);
    color: white;
  }

  .skills h4 {
    font-family: sans-serif;
    font-weight: 800;
  }

  .b-card {
    left: 30px;
    width: 45%;
  }

  .b-card img {
    height: 100%;
  }

  .b-card-sz {
    z-index: -1;
    width: 25%;
    margin-top: 7%;
    margin-bottom: 5%;
    text-align: center;
    border-bottom: 3px solid rgb(82, 73, 73);
    border-right: 3px solid rgb(82, 73, 73);
    border-left: 3px solid rgb(82, 73, 73);
  }

  .b-card-sz h3 {
    color: rgb(82, 73, 73);
    font-size: 4rem;
    font-weight: 800;
    font-family: 'Bebas Neue', cursive;
  }

  .b-card-container {
    display: flex;
    margin-left: 24.7% !important;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
  }

  .b-card-container .button-background {
    width: 30%;
    background: rgba(82, 73, 73, 0.801) !important;
  }

  .button-background {
    background: rgb(82, 73, 73);
    color: white;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  @media only screen and (max-width: 900px) {
    .slide {
      padding-top: 25px;
    }

    .jumbotron img {
      height: 200px;
    }

    .title {
      font-size: 10px !important;
    }

    .b-card {
      width: 50%;
    }

  .card-intro {
    margin-left: 40px;
  }

    .b-card-sz {
      width: 70%;
      margin-left: 75px !important;
    }

    .b-card-sz h3 {
      font-size: 1.8rem;
    }

    .container-img .button-background {
      font-size: 0.8rem;
      width: 50%;
    }

    .centered {
      top: 45%;
      left: 55%;
    }

    .centered-icon {
      top: 80%;
      left: 40%;
    }

  .skills {
    display: flex;
    flex-direction: column;
    margin-left: 60px !important;
  }

  .b-card-container {
    margin-left: 0 !important;
    display: block;
  }

  .b-card-container h3 {
    font-size: 1.1rem;
  }

  .b-card-container img {
    width: 85vw;
  }

  .b-card-container .button-background {
    width: 100%;
    background: rgba(82, 73, 73, 0.767) !important;
  }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 50%;
    }
  }
</style>>

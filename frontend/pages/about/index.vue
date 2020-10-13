<template>
  <div class="about">

    <mdb-jumbotron class="cardHeight mb-0 text-center blue-grey lighten-5 animated fadeInDown">
      <h2 class="card-title h2">{{$t('name')}}</h2>
      <p class="indigo-text my-4 font-weight-bold">{{$t('free')}}</p>
      <mdb-row class="d-flex justify-content-center">
        <mdb-col xl="7" class="pb-2">
          <p class="card-text">{{$t('aboutIntro')}}</p>
        </mdb-col>
      </mdb-row>
    </mdb-jumbotron>

    <mdb-container>

      <mdb-container class="max">
        <section class="my-5">
          <h2 class="h1-responsive font-weight-bold text-center my-5 animated fadeInDown">
            {{ $t('skills') }}
          </h2>
          <mdb-row>
            <mdb-col lg="5" class="text-center text-lg-left animated fadeInLeft">
              <img class="img-fluid animated fadeInDown" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image">
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row class="mb-3 animated fadeInLeft">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    HTML5/CSS3/JavaScript
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInRight">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Vue.js/Nuxt.js (Vuex)
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInRight">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Bootstrap/Bootstrap-Vue
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInRight">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Vuetify.js
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInLeft">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    Node.js
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInRight">
                <mdb-col size="1">
                  <mdb-icon icon="share" size="lg" class="mb-3 mt-3" />
                </mdb-col>
                <mdb-col xl="10" md="11" size="10">
                  <h5 class="font-weight-bold mb-3">
                    NPM
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3 animated fadeInRight">
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
                    REST architecture
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
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

      <mdb-container class="max">
        <section class="text-center my-5">
          <mdb-row>
            <mdb-row class="intro">
              <mdb-col md="6" class="md-0 mb-4">
                <mdb-card v-animateOnScroll="{animation: 'bounceInLeft'}" class="card-image-entrepeneur">
                  <a href="/portfolio">
                    <div class="hei text-white rgba-black-strong">
                      <div>
                        <h3 class="py-3 font-weight-bold">
                          <strong class="titleSize">{{$t('portfolio')}}</strong>
                        </h3>
                      </div>
                    </div>
                  </a>
                </mdb-card>
              </mdb-col>
              <mdb-col md="6" class="md-0 mb-4">
                <mdb-card v-animateOnScroll="{animation: 'bounceInRight'}" class="card-image-individual">
                  <a href="/contacts">
                    <div class="hei text-white rgba-black-strong">
                      <div>
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
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbIcon, animateOnScroll, mdbJumbotron } from 'mdbvue'
export default {
  name: 'AboutPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbIcon,
    mdbJumbotron
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

  .about {
    margin-top: -60px;
  }

  .max {
    max-width: 100vw !important;
    overflow: hidden !important;
  }
  .card-image {
    background-image: url('../../assets/images/frontend.jpg');
    background-repeat: no-repeat;
  }

  .card-image-entrepeneur {
    background-image: url('../../assets/images/portfolio.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .card-image-entrepeneur:hover {
    outline: 5px solid black;
  }

  .card-image-entrepeneur a {
    text-decoration: none !important;
  }

  .card-image-individual {
    background-image: url('../../assets/images/contact.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .card-image-individual:hover {
    outline: 5px solid black;
  }

  .card-image-individual a {
    text-decoration: none !important;
  }

  .cardHeight {
    padding-top: 10%;
    padding-bottom: 10%;
    background: rgb(34,193,195);
    background: linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  }

  .roww {
    padding-top: 15vh !important;
    background: rgb(219, 194, 156);
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
    align-items: flex-start;
  }

  .timeline-animation-left {
    animation-name: timeline-left
  }

  .imgHeight {
    height: 300px;
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

  @keyframes timeline-left {
    from {
      padding-left: 100px;
    }
    to {
      padding-left: 24px
    }
  }

    .timeline-animation-right {
    animation-name: timeline-right
  }

  @keyframes timeline-right {
    from {
      padding-right: 100px;
    }
    to {
      padding-right: 24px
    }
  }

  @media screen and (max-width: 1300px) {
      .cardHeight {
        padding-top: 20%;
        padding-bottom: 10%;
      }

      .titleSize {
        font-size: 1.3rem;
      }

      .sticky {
        margin-left: 78%;
        width: 60px;
      }
    }

    @media screen and (max-width: 996px) {
      .titleSize {
        font-size: 1.3rem;
      }

      .sticky {
        margin-left: 78%;
        width: 60px;
      }

      .cardHeight {
        padding-top: 40%;
        padding-bottom: 10%;
      }
    }
</style>

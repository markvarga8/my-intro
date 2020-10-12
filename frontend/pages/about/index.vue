<template>
  <div class="about">
    <mdb-container>
      <section class="text-center my-5">
        <mdb-row class="roww">
          <mdb-col md="12" class="mb-4">
            <mdb-card class="card-image animated fadeInDown">
              <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h6 class="">
                    <mdb-icon icon="user"></mdb-icon><strong class="ml-3">{{$t('about')}}</strong>
                  </h6>
                  <h3 class="py-3 font-weight-bold">
                    <strong class="titleSize">{{$t('name')}}</strong>
                  </h3>
                  <p class="pb-3">{{$t('aboutIntro')}}</p>
                  <a href="/contacts"><mdb-btn color="lily" rounded size="md"><mdb-icon icon="envelope" class="left"/>{{$t('contact')}}</mdb-btn></a>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-row class="intro">
            <mdb-col md="6" class="md-0 mb-4">
              <mdb-card class="card-image-entrepeneur animated fadeInLeft">
                <div class="hei text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h3 class="py-3 font-weight-bold">
                      <strong class="titleSize">{{$t('skillsTitle2')}}</strong>
                    </h3>
                    <p class="pb-3">{{$t('entrepreneurIntro')}}</p>
                    <a href="/contacts"><mdb-btn color="lily" rounded size="md"><mdb-icon icon="envelope" class="left"/>{{$t('contact')}}</mdb-btn></a>
                  </div>
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col md="6" class="md-0 mb-4">
              <mdb-card class="card-image-individual animated fadeInRight">
                <div class="hei text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h3 class="py-3 font-weight-bold">
                      <strong class="titleSize">{{$t('skillsTitle1')}}</strong>
                    </h3>
                    <p class="pb-3">{{$t('individualIntro')}}</p>
                    <a href="/contacts"><mdb-btn color="lily" rounded size="md"><mdb-icon icon="envelope" class="left"/>{{$t('contact')}}</mdb-btn></a>
                  </div>
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-row>
      </section>
    </mdb-container>

    <mdb-container>

      <mdb-container class="max">
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
                  <a href="/contacts"><mdb-btn color="lily">{{ $t('contact') }}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>

      <mdb-container class="max">
        <section class="my-5">
          <h2 v-animateOnScroll="{animation: 'bounceInDown'}" class="h1-responsive font-weight-bold text-center my-5">{{$t('project')}}</h2>
          <p v-animateOnScroll="{animation: 'bounceInDown'}" class="grey-text w-responsive text-center mx-auto mb-5">{{$t('scroll')}}</p>
          <mdb-row>
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" lg="5" class="mb-lg-0 mb-5">
              <img src="../../assets/images/inflation.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1" />
              <h2 class="mt-3">{{$t('inflation')}}</h2>
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">Vue.js, Vuex, Bootstrap-vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="stream" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('description')}}</h5>
                  <p class="grey-text">
                    {{$t('inflationContent')}}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/fst02/Personal-Inflation-Calculator"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">Vue.js, Vuex, Bootstrap-vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="stream" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('description')}}</h5>
                  <p class="grey-text">{{$t('leaderboard')}}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/fst02/leaderboard-spa"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col v-animateOnScroll="{animation: 'bounceInRight'}" lg="5">
              <img src="../../assets/images/leaderboard.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1"/>
              <h2 class="mt-3">Leader Board - SPA</h2>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" lg="5" class="mb-lg-0 mb-5">
              <img src="../../assets/images/introduction.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1" />
              <h2 class="mt-3">Introduction</h2>
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">Nuxt.js, Vuex, Bootstrap-vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/ben1998deguz/my-intro"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">HTML5, CSS3, JavaScript</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/ben1998deguz/coffee"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col v-animateOnScroll="{animation: 'bounceInRight'}" lg="5">
              <img src="../../assets/images/2.png" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1"/>
              <h2 class="mt-3">Coffee website</h2>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" lg="5" class="mb-lg-0 mb-5">
              <img src="../../assets/images/hangman.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1" />
              <h2 class="mt-3">Hangman</h2>
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">HTML, CSS, JavaScript, Bootstrap, Git</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/fst02/hangman"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">HTML, CSS, JavaScript, Bootstrap, Git</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/fst02/tetris"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col v-animateOnScroll="{animation: 'bounceInRight'}" lg="5">
              <img src="../../assets/images/Tetris.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1"/>
              <h2 class="mt-3">Tetris</h2>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col v-animateOnScroll="{animation: 'bounceInLeft'}" lg="5" class="mb-lg-0 mb-5">
              <img src="../../assets/images/mario.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1" />
              <h2 class="mt-3">Mario</h2>
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="code" size="2x"/>
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                  <p class="grey-text">HTML, CSS, JavaScript, Bootstrap, Git</p>
                </mdb-col>
              </mdb-row>
              <mdb-row v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 class="font-weight-bold mb-3">Link</h5>
                  <a href="https://github.com/fst02/mario"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
          <mdb-row>
            <mdb-col size="2">
              <mdb-icon icon="angle-double-right" size="lg" class="mb-3 mt-3 animated bounceInLeft infinite" />
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <a class="mx-auto" href="/contacts"><mdb-btn v-animateOnScroll="{animation: 'flip'}" color="lily">{{$t('contact')}}</mdb-btn></a>
            </mdb-col>
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
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbBtn, mdbIcon, animateOnScroll } from 'mdbvue'
export default {
  name: 'AboutPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbBtn,
    mdbIcon
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
    background-image: url('../../assets/images/hand.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .card-image-individual {
    background-image: url('../../assets/images/company.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .roww {
    padding-top: 10% !important;
  }

  .intro {
    height: 20%;
  }

  .hei {
    height: 100%;
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

  @media screen and (max-width: 800px) {
      .titleSize {
        font-size: 1.3rem;
      }

      .sticky {
        margin-left: 78%;
        width: 60px;
      }
    }
</style>

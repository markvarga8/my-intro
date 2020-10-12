<template>
  <div class="portfolio">
    <mdb-container class="roww">
      <section class="my-5">
        <mdb-row class="max">
          <mdb-col lg="5" class="mb-lg-0 mb-5">
            <img src="../../assets/images/inflation.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1" />
            <h2 class="mt-3">{{$t('inflation')}}</h2>
          </mdb-col>
          <mdb-col lg="7">
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="code" size="2x"/>
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                <p class="grey-text">Vue.js, Vuex, Bootstrap-vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST</p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
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
            <mdb-row class="mb-3">
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
        <mdb-row class="max">
          <mdb-col lg="7">
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="code" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">{{$t('tech')}}</h5>
                <p class="grey-text">Vue.js, Vuex, Bootstrap-vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST</p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="stream" size="2x"/>
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">{{$t('description')}}</h5>
                <p class="grey-text">{{$t('leaderboard')}}</p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="link" size="2x"/>
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">Link</h5>
                <a href="https://github.com/fst02/leaderboard-spa"><mdb-btn color="lily">{{$t('here')}}</mdb-btn></a>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col lg="5">
            <img src="../../assets/images/leaderboard.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1"/>
            <h2 class="mt-3">Leader Board - SPA</h2>
          </mdb-col>
        </mdb-row>
        <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5"/>
        <mdb-container>
          <mdb-row class="max">
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
          <mdb-row class="max">
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
          <mdb-row class="max">
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
          <mdb-row class="max">
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
          <mdb-row class="max">
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
          <mdb-row class="max">
            <mdb-col size="2">
              <mdb-icon icon="angle-double-right" size="lg" class="mb-3 mt-3 animated bounceInLeft infinite" />
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <a class="mx-auto" href="/contacts"><mdb-btn v-animateOnScroll="{animation: 'flip'}" color="lily">{{$t('contact')}}</mdb-btn></a>
            </mdb-col>
          </mdb-row>
          <a
            id="back-to-top"
            href="#"
            class="sticky btn back-to-top"
          >
            <mdb-icon icon="angle-double-up" class="fa-3x" />
          </a>
        </mdb-container>
      </section>
    </mdb-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, animateOnScroll } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
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

  .portfolio {
    margin-top: -60px;
  }

  .roww {
    padding-top: 10% !important;
  }

  .max {
    max-width: 100vw !important;
    overflow: hidden !important;
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

  @media screen and (max-width: 800px) {
    .sticky {
        margin-left: 78%;
        width: 60px;
      }
  }
</style>

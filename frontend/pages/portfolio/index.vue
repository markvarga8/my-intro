<template>
  <div class="portfolio">
    <mdb-container class="rowwww">
      <section class="my-5">
        <mdb-row class="max animated fadeInLeft">
          <mdb-col lg="5" class="mb-lg-0 mb-5">
            <h2 class="mb-3">
              {{ $t('inflation') }}
            </h2>
            <hr color="lily" class="my-5">
            <img src="../../assets/images/inflation.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
          </mdb-col>
          <mdb-col lg="7">
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="code" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  {{ $t('tech') }}
                </h5>
                <h5 class="textColor">
                  Vue.js, Vuex, Bootstrap-Vue, Git, NPM, Express.js, MySQL, Sequelize, API development, REST, MVC
                </h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="stream" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  {{ $t('description') }}
                </h5>
                <p class="textColor">
                  {{ $t('inflationContent') }}
                </p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="link" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  Link
                </h5>
                <a href="https://github.com/fst02/Personal-Inflation-Calculator"><mdb-btn color="lily">
                  {{ $t('here') }}
                </mdb-btn></a>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
        <hr color="lily" class="my-5">
        <mdb-row class="max animated fadeInRight">
          <mdb-col lg="7">
            <h2 class="mb-3">
              Leader Board - SPA
            </h2>
            <hr color="lily" class="my-5">
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="code" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  {{ $t('tech') }}
                </h5>
                <h5 class="textColor">
                  Vue.js, Vuex, Bootstrap-Vue, Git, NPM, Express.js, MySQL, Sequelize, API development, REST, MVC
                </h5>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="stream" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  {{ $t('description') }}
                </h5>
                <p class="textColor">
                  {{ $t('leaderboard') }}
                </p>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mb-3">
              <mdb-col md="1" size="2">
                <mdb-icon icon="link" size="2x" />
              </mdb-col>
              <mdb-col md="11" size="10">
                <h5 class="font-weight-bold mb-3">
                  Link
                </h5>
                <a href="https://github.com/fst02/leaderboard-spa"><mdb-btn color="lily">
                  {{ $t('here') }}</mdb-btn></a>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col lg="5">
            <img src="../../assets/images/leaderboard.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
          </mdb-col>
        </mdb-row>
        <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">
        <mdb-container>
          <mdb-row class="max">
            <mdb-col lg="5" class="mb-lg-0 mb-5">
              <h2 v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                Introduction
              </h2>
              <hr v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily" class="my-5">
              <img v-animateOnScroll="{animation: 'bounceInLeft'}" src="../../assets/images/introduction.png" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInRight'}" icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="font-weight-bold mb-3">
                    {{ $t('tech') }}
                  </h5>
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="textColor">
                    Nuxt.js, Vuex, Bootstrap-Vue, Git, npm, Express.js, MySQL, Sequelize, API development, REST, MVC
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInLeft'}" icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInLeft'}" class="font-weight-bold mb-3">
                    Link
                  </h5>
                  <a href="https://github.com/ben1998deguz/my-intro"><mdb-btn v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily">
                    {{ $t('here') }}
                  </mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">
          <mdb-row class="max">
            <mdb-col lg="7">
              <h2 v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                Coffee website
              </h2>
              <hr v-animateOnScroll="{animation: 'bounceInRight'}" color="lily" class="my-5">
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInRight'}" icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="font-weight-bold mb-3">
                    {{ $t('tech') }}
                  </h5>
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="textColor">
                    HTML5, CSS3, JavaScript, Bootstrap, Jquery, Git
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInLeft'}" icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInLeft'}" class="font-weight-bold mb-3">
                    Link
                  </h5>
                  <a href="https://github.com/ben1998deguz/coffee"><mdb-btn v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily">
                    {{ $t('here') }}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col lg="5">
              <img v-animateOnScroll="{animation: 'bounceInRight'}" src="../../assets/images/2.png" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">
          <mdb-row class="max">
            <mdb-col lg="5" class="mb-lg-0 mb-5">
              <h2 v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                Hangman
              </h2>
              <hr v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily" class="my-5">
              <img v-animateOnScroll="{animation: 'bounceInLeft'}" src="../../assets/images/hangman.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInRight'}" icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="font-weight-bold mb-3">
                    {{ $t('tech') }}
                  </h5>
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="textColor">
                    HTML, CSS, JavaScript, Bootstrap, API development, Git
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInLeft'}" icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInLeft'}" class="font-weight-bold mb-3">
                    Link
                  </h5>
                  <a href="https://github.com/fst02/hangman"><mdb-btn v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily">
                    {{ $t('here') }}
                  </mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">
          <mdb-row class="max">
            <mdb-col lg="7">
              <h2 v-animateOnScroll="{animation: 'bounceInRight'}" class="mb-3">
                Tetris
              </h2>
              <hr v-animateOnScroll="{animation: 'bounceInRight'}" color="lily" class="my-5">
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInRight'}" icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="font-weight-bold mb-3">
                    {{ $t('tech') }}
                  </h5>
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="textColor">
                    HTML, CSS, JavaScript, Bootstrap, API development, Git
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInLeft'}" icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInLeft'}" class="font-weight-bold mb-3">
                    Link
                  </h5>
                  <a href="https://github.com/fst02/tetris"><mdb-btn v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily">
                    {{ $t('here') }}
                  </mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col lg="5">
              <img v-animateOnScroll="{animation: 'bounceInRight'}" src="../../assets/images/Tetris.jpg" alt="Sample project image" class="img-fluid rounded z-depth-1">
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">
          <mdb-row class="max">
            <mdb-col lg="5" class="mb-lg-0 mb-5">
              <h2 v-animateOnScroll="{animation: 'bounceInLeft'}" class="mb-3">
                Mario
              </h2>
              <hr v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily" class="my-5">
              <img v-animateOnScroll="{animation: 'bounceInLeft'}" src="../../assets/images/mario.jpg" alt="Sample project image" class="imgHeight img-fluid rounded z-depth-1">
            </mdb-col>
            <mdb-col lg="7">
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInRight'}" icon="code" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="font-weight-bold mb-3">
                    {{ $t('tech') }}
                  </h5>
                  <h5 v-animateOnScroll="{animation: 'bounceInRight'}" class="textColor">
                    HTML, CSS, JavaScript, Bootstrap, API development, Git
                  </h5>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-3">
                <mdb-col md="1" size="2">
                  <mdb-icon v-animateOnScroll="{animation: 'bounceInLeft'}" icon="link" size="2x" />
                </mdb-col>
                <mdb-col md="11" size="10">
                  <h5 v-animateOnScroll="{animation: 'bounceInLeft'}" class="font-weight-bold mb-3">
                    Link
                  </h5>
                  <a href="https://github.com/fst02/mario"><mdb-btn v-animateOnScroll="{animation: 'bounceInLeft'}" color="lily">
                    {{ $t('here') }}</mdb-btn></a>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr v-animateOnScroll="{animation: 'bounceInDown'}" color="lily" class="my-5">

          <mdb-container class="max">
            <section class="text-center my-5">
              <mdb-row>
                <mdb-row class="intro">
                  <mdb-col md="6" class="md-0 mb-4">
                    <mdb-card v-animateOnScroll="{animation: 'bounceInLeft'}" class="card-image-entrepeneur">
                      <a href="/about">
                        <div class="hei text-white rgba-black-strong">
                          <div>
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
                  <mdb-col md="6" class="md-0 mb-4">
                    <mdb-card v-animateOnScroll="{animation: 'bounceInRight'}" class="card-image-individual">
                      <a href="/contacts">
                        <div class="hei text-white rgba-black-strong">
                          <div>
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
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, animateOnScroll, mdbCard } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbCard
  },
  directives: {
    animateOnScroll
  },
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

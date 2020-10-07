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
                    <strong>{{$t('name')}}</strong>
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
                      <strong>{{$t('skillsTitle2')}}</strong>
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
                      <strong>{{$t('skillsTitle1')}}</strong>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbBtn, mdbIcon } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbBtn,
    mdbIcon
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
  .about {
    margin-top: -60px;
  }
  .card-image {
    background-image: url('../../assets/images/frontend.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
</style>

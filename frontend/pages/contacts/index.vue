<template>
  <div>
    <div class="container-img">
      <div class="background"></div>
      <mdb-container class="centered">
        <section class="contact-section my-5">
          <mdb-card>
            <mdb-row>
              <mdb-col lg="8">
                <mdb-card-body class="form">
                  <h3 class="mt-4">
                    <mdb-icon icon="envelope" class="pr-2"/>Write to me: {{$t('close')}}
                  </h3>
                  <mdb-row>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-name" label="Your name"/>
                      </div>
                    </mdb-col>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-email" label="Your email"/>
                      </div>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-phone" label="Your phone"/>
                      </div>
                    </mdb-col>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-company" label="Your company"/>
                      </div>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col md="12">
                      <div class="md-form mb-0">
                        <mdb-textarea id="form-contact-message" label="Your message"/>
                        <mdb-btn tag="a" floating color="blue" size="lg">
                          <mdb-icon far icon="paper-plane"/>
                        </mdb-btn>
                      </div>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-body>
              </mdb-col>
              <mdb-col lg="4">
                <mdb-card-body class="contact text-center h-100">
                  <h3 class="my-4 pb-2">Contact information</h3>
                  <ul class="text-lg-left list-unstyled ml-4">
                    <li>
                      <p><mdb-icon icon="map-marker" class="pr-2"/>New York, 94126 USA</p>
                    </li>
                    <li>
                      <p><mdb-icon icon="phone" class="pr-2"/>+ 01 234 567 89</p>
                    </li>
                    <li>
                      <p><mdb-icon icon="envelope" class="pr-2"/>contact@example.com</p>
                    </li>
                  </ul>
                  <hr class="hr-light my-4"/>
                  <ul class="list-inline text-center list-unstyled">
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="twitter"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="linkedin"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="instagram"/>
                      </a>
                    </li>
                  </ul>
                </mdb-card-body>
              </mdb-col>
            </mdb-row>
          </mdb-card>
        </section>
      </mdb-container>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
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
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Hind&display=swap');

  .container-img img {
    position: relative;
    text-align: center;
    color: white;
  }

  .group-item a {
    color: #19b3d3;
  }

  .background {
    width: 100%;
    height: 100vh;
    background:  rgb(219, 194, 156);
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black !important;
    font-family: 'Bebas Neue', cursive;
  }

  .input {
    margin-top: 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid white;
    color: white;
    background:  rgba(82, 73, 73, 0.767);
    outline: none;
  }

  .block {
    display: block;
  }

  @media only screen and (max-width: 900px) {

    .centered {
      width: 80%;
      left: 55%;
      top: 80%;
      margin-bottom: 200px !important;
    }
  }
</style>

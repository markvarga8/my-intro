<template>
  <div>
    <div class="container-img">
      <div class="background"></div>
      <b-list-group class="centered w-50">
        <b-list-group-item class="group-item d-flex justify-content-center align-items-center">
          <b-icon class="iconn" icon="check-box" scale="2"></b-icon>
          <h1>{{$t('search')}}</h1>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon class="iconn" icon="chat" scale="2"></b-icon>
          <h3>ben1998deguz@gmail.com</h3>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon class="iconn" icon="hand-thumbs-up" scale="2" variant="info"></b-icon>
          <a href="https://www.facebook.com/vargabeni69" target="_blank"><h3>{{$t('facebook')}}</h3></a>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon class="iconn" icon="info-circle-fill" scale="2" variant="info"></b-icon>
          <a href="https://www.linkedin.com/in/varga-mark-61796a197/" target="_blank"><h3>{{$t('linkedin')}}</h3></a>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-center align-items-center">
          <b-icon icon="check-box" scale="2" variant="success"></b-icon>
          <h1>{{$t('writeMessage')}}</h1>
        </b-list-group-item>

        <b-form>
          <input class="block input mx-auto" type="text" placeholder="Name">
          <input class="block input mx-auto" type="email" placeholder="Email">
          <textarea
            class="block input textarea mx-auto mb-4"
            name=""
            cols="20"
            rows="5"
            placeholder="Message"
          />
          <b-button class="button-background block mx-auto" variant="outline">{{$t('send')}}</b-button>
        </b-form>
      </b-list-group>
    </div>

    <mdb-container>
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
        <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col md="9" class="md-0 mb-5">
            <form>
              <mdb-row>
                <mdb-col md="6">
                  <div class="md-form mb-0">
                    <mdb-input type="text" id="contact-name" label="Your name" />
                  </div>
                </mdb-col>
                <mdb-col md="6">
                  <div class="md-form mb-0">
                    <mdb-input type="text" id="contact-email" label="Your email" />
                  </div>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col md="12">
                  <div class="md-form mb-0">
                    <mdb-input type="text" id="contact-subject" label="Subject" />
                  </div>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col md="12">
                  <div class="md-form mb-0">
                    <mdb-textarea id="contact-message" label="Your message" />
                  </div>
                </mdb-col>
              </mdb-row>
            </form>
            <div class="text-center text-md-left">
              <mdb-btn color="primary" size="md">Send</mdb-btn>
            </div>
          </mdb-col>
          <mdb-col md="3" class="text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <mdb-icon icon="map-marker" size="2x" class="blue-text"/>
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <mdb-icon icon="phone" size="2x" class="blue-text mt-4"/>
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <mdb-icon icon="envelope" size="2x" class="blue-text mt-4"/>
                <p>contact@example.com</p>
              </li>
            </ul>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea
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
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:  rgba(82, 73, 73, 0.767);
    color: black !important;
    text-align: center;
    border: 1px solid white;
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
    .centered h1 {
    font-size: 0.6rem !important;
    }

    .centered h3 {
    font-size: 0.6rem !important;
    }

    .centered .iconn {
    font-size: 0.6rem !important;
    }
  }
</style>

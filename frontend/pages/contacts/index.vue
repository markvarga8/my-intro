<template>
  <div>
    <div class="container-img">
      <img class="background" src="../../assets/images/background.jpg" alt="">
      <b-list-group class="centered w-50">
        <b-list-group-item class="group-item d-flex justify-content-center align-items-center">
          <b-icon icon="check-box" scale="2"></b-icon>
          <h1>Keress bátran!</h1>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon icon="chat" scale="2"></b-icon>
          <h3>ben1998deguz@gmail.com</h3>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon icon="hand-thumbs-up" scale="2" variant="info"></b-icon>
          <a href="https://www.facebook.com/vargabeni69" target="_blank"><h3>Keress Facebookon</h3></a>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-between align-items-center">
          <b-icon icon="info-circle-fill" scale="2" variant="info"></b-icon>
          <a href="https://www.linkedin.com/in/varga-mark-61796a197/" target="_blank"><h3>Keress LinkedInen</h3></a>
        </b-list-group-item>
        <b-list-group-item class="group-item d-flex justify-content-center align-items-center">
          <b-icon icon="check-box" scale="2" variant="success"></b-icon>
          <h1>Vagy írj itt üzenetet:</h1>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
  })
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
  }

  .centered {
    position: absolute;
    top: 50%;
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
</style>

<template>
  <div class="d-flex flex-row justify-content-center align-items-center" style="min-height: 100vh">

    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <p class="h4 text-center mb-4">Register</p>
              <div class="grey-text">
                <mdb-input
                  v-model="email"
                  label="Your email"
                  icon="envelope"
                  type="email"
                />
                <mdb-input
                  v-model="password"
                  label="Your password"
                  icon="lock"
                  type="password"
                />
              </div>
            </div>
            <div class="text-center">
              <mdb-btn type="submit">Register</mdb-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from 'mdbvue'
import { mapState } from 'vuex'
import { firebase } from '@firebase/app'
import 'firebase/auth'
export default {
  components: {
    mdbInput,
    mdbBtn
  },
  layout: 'private',
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
  },
  data () {
    return {
      email: null,
      password: null,
      errors: null
    }
  },

  methods: {
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        this.$router.push('/blog')
      }).catch((err) => {
        this.errors = err
      })
    }
  }
}
</script>

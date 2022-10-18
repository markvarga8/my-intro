<template>
  <div>
    <PrivateHeader :user="user" />
    <Nuxt />
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/admincp')
      } else {
        this.user = user
      }
    })
  }
}
</script>

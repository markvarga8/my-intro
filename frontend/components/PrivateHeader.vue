<template>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand class="mb-3" href="/">
      Varga Mark
    </mdb-navbar-brand>
    <mdb-navbar-toggler right>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/registercp" active>Register</mdb-nav-item>
        <mdb-nav-item v-if="user" @click="logOut" active>Log out</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue'
import { firebase } from '@firebase/app'
import 'firebase/auth'
export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },
  props: ['user'],
  methods: {
    logOut () {
      firebase.auth().signOut().then((result) => {
        this.$router.push('/')
      })
    }
  }
}
</script>

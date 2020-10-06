<template>
  <div>
    <mdb-navbar class="navbar" position="top" dark href="/" scrolling >
      <mdb-navbar-brand>
        <a href="/"><img class="logo" src="" alt=""></a>
      </mdb-navbar-brand>
      <mdb-navbar-toggler right>
        <mdb-navbar-nav right>
          <b-checkbox id="check" v-model="$i18n.locale" value="hu">hu</b-checkbox>
          <b-checkbox id="checkEn" v-model="$i18n.locale" value="en">en</b-checkbox>
          <mdb-nav-item class="menu" href="/">
              <mdb-button>{{$t('home')}}</mdb-button>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="/about">
              <mdb-button>{{$t('about')}}</mdb-button>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="/contacts">
              <mdb-button>{{$t('contact')}}</mdb-button>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="https://github.com/ben1998deguz">
              <mdb-icon fab icon="github"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="https://www.facebook.com/vargabeni69/">
              <mdb-icon fab icon="facebook-f"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="https://www.linkedin.com/in/varga-mark-61796a197/">
              <mdb-icon fab icon="linkedin"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu">
            <label for="checkEn">
              <mdb-btn
                v-if="hu"
                @click="translateEn"
                tag="a"
                gradient="blue"
                floating
                size="sm"
              >EN
              </mdb-btn>
            </label>
          </mdb-nav-item>
          <mdb-nav-item class="menu">
            <label for="check">
              <mdb-btn
                v-if="en"
                @click="translateHu"
                tag="a"
                gradient="blue"
                floating
                size="sm"
                >
                HU
              </mdb-btn>
            </label>
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbNavbar, mdbNavbarNav, mdbNavItem, mdbNavbarBrand, mdbNavbarToggler, mdbIcon } from 'mdbvue'

export default {
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbIcon
  },
  computed: mapState({
    en: state => state.LangModule.en,
    hu: state => state.LangModule.hu
  }),
  methods: {
    translateEn (app) {
      this.$store.dispatch('LangModule/en')
      this.$cookie.set('leng', 'en', { expires: '6h' })
    },
    translateHu () {
      this.$store.dispatch('LangModule/hu')
      this.$cookie.set('leng', 'hu', { expires: '6h' })
    }
  }
}
</script>

<style>

.logo {
      height: 40px;
      width: auto;
      margin: 10px;
    }

    .menu {
      text-align: end;
      padding-right: 0.5em;
    }

    .hm-gradient {
      background:  rgba(82, 73, 73, 0.267);
    }

    .navbar {
      background:  rgba(82, 73, 73, 0.767);
      box-shadow: 0 0 0 0 transparent;
    }

    .navbar:not(.top-nav-collapse) {
      background:  rgb(219, 194, 156);
    }

    .row {
      margin: 0;
      padding:0;
    }

    .column {
      margin: 0;
      padding: 0;
    }

    .half-page {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 6rem;
    }

    .heading {
      font-weight: 700;
      color:  rgba(82, 73, 73, 0.967);
    }

    .subheading {
      margin: 2.5rem 0;
      color:  rgba(82, 73, 73, 0.767);
      font-size: 1.5rem;
    }

    .btn-lily {
      background:  rgba(82, 73, 73, 0.967);
      color: white;
    }

    .image {
      width: 100%;
      height: 100vh !important;
    }

    .paragraph {
      padding: 3rem 1.5em;
    }

    .custom-control {
      display: none;
    }

    @media screen and (max-width: 770px) {
      .half-page {
        padding:2rem;
      }

      .navbar {
        position: relative;
        margin-top: 5px;
      }
      .navbar:not(.top-nav-collapse) {
          background:  rgba(82, 73, 73, 0.767);
      }
    }

    @media screen and (max-width: 400px) {
      .half-page {
        padding: 1rem;
      }
    }

    @media screen and (max-width: 320px) {
      .heading {
        font-size: 4em;
      }
    }
</style>

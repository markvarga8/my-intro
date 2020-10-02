<template>
  <div>
    <!-- <input type="checkbox" id="check"> -->

    <header>
      <div class="left-area">
        <a href="/"><h3>Mark <span>Varga</span></h3></a>
      </div>
    </header>

    <div class="sidebar">
      <b-button href="/" class="btn" variant="outline"><b-icon class="icon" icon="house-door"></b-icon></b-button>
      <b-button href="/about" class="btn" variant="outline"><b-icon class="icon" icon="info-circle"></b-icon></b-button>
      <b-button href="/contacts" class="btn" variant="outline"><b-icon class="icon" icon="telephone"></b-icon></b-button>
      <label for="checkEn">
        <b-button v-if="hu" @click="translateEn" class="btn" variant="outline">EN</b-button>
      </label>
      <label for="check">
        <b-button v-if="en" class="btn" variant="outline" @click="translateHu">HU</b-button>
      </label>
      <b-checkbox id="check" v-model="$i18n.locale" value="hu">hu</b-checkbox>
      <b-checkbox id="checkEn" v-model="$i18n.locale" value="en">en</b-checkbox>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

header {
  position: fixed;
  background:rgba(82, 73, 73, 0.767);
  padding: 0px;
  width: 100%;
  height: 50px;
  z-index: 999;
  border-bottom: 3px solid white;
}

.left-area {
  text-align: center;
}

.left-area:hover {
  text-decoration: none !important;
}

.left-area h3 {
  margin-top: 10px;
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}

.left-area h3:hover {
  text-decoration: none !important;
}

.left-area span {
  color: #1dc4e7
}

/* .logout-btn {
  padding: 5px;
  background: #19b3d3;
  text-decoration: none;
  float: right;
  margin-top: -30px;
  margin-right: 40px;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
} */

/* .logout-btn:hover {
  background: #0d9dbb;
} */

.sidebar {
  background: rgba(82, 73, 73, 0.767);
  margin-top: 50px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 70px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;
  border-right: 3px solid white;
  text-align: center;
  z-index: 1;
}

/* .sidebar .profile-image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
} */

.sidebar h4 {
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a {
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover {
  background: #19b3d3;
}

.sidebar .btn {
  width: 67px;
  font-size: 0.8rem;
  margin-left: 0px;
  background: rgba(82, 73, 73, 0.767);
  color: white;
}

label #sidebar-btn {
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  font-size: 20px;
  margin: 5px 25px;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar-btn:hover {
  color: #19b3d3;
}

#check:checked ~ .sidebar {
  left: -190px;
}

#check:checked ~ .sidebar a span {
  display: none;
}

#check:checked ~ .sidebar a {
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
}

/* .content {
  margin-left: 250px;
  background: url('../assets/images/web.png') no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
  transition-property: margin-left;
} */

/* #check:checked ~ .content {
  margin-left: 60px;
} */

.custom-control {
  display: none;
}

@media only screen and (max-width: 900px) {
.sidebar {
  width: 40px;
}

.sidebar .btn {
  width: 37px;
  font-size: 0.5rem;
}
}
</style>

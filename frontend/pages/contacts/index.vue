<template>
  <div class="contact">
    <mdb-container>
      <section class="rowww my-5 mt-5">
        <mdb-row class="border text-center animated fadeInLeft">
          <mdb-col lg="12" class="m-1">
            <h4>
              {{ $t('interest') }}
            </h4>
            <mdb-icon icon="envelope" class="fa-3x mt-3" />
            <p class="mt-3">
              markweb.varga@gmail.com
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-row class="border text-center m-5 animated fadeInRight">
          <mdb-col lg="12" class="m-1">
            <h4>
              {{ $t('social') }}
            </h4>
            <a href="https://www.facebook.com/vargabeni69/">
              <mdb-icon fab icon="facebook-f" class="fa-3x mr-4 mt-3" />
            </a>
            <a href="https://www.linkedin.com/in/varga-mark-61796a197/">
              <mdb-icon fab icon="linkedin" class="fa-3x" />
            </a>
          </mdb-col>
        </mdb-row>
        <mdb-row class="text-center m-5 animated fadeInLeft">
          <mdb-col lg="12">
            <h4 class="mb-3">
              {{ $t('future') }}
            </h4>
            <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Budapest+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameBorder="0" style="border: 0" />
            </div>
            <br>
            <mdb-row class="text-center">
              <mdb-col md="12">
                <mdb-icon icon="map-marker" class="fa-2x" />
                <p>Budapest</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
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

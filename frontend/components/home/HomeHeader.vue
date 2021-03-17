<template>
  <b-row>
    <b-col md="6" xs="12" class="container half-page column animated fadeInLeft">
      <h1 class="heading display-3">
        {{ $t('name') }}
      </h1>
      <h2 class="pb-5 subheading font-weight-bold">
        {{ $t('free') }}
      </h2>
      <b-icon icon="angle-double-down" class="icolor bottom-left animated bounce infinite fa-3x" />
      <b-icon icon="angle-double-down" class="icolor bottom-right animated bounce infinite fa-3x" />
      <b-icon icon="angle-double-down" class="icolor bottom-center animated bounce infinite fa-3x" />
    </b-col>
    <b-col md="6" xs="12">
      <mdb-view>
        <img class="image animated fadeInDown" src="~/assets/images/background2.jpg">
        <mdb-mask flex-center class="hm-gradient" />
      </mdb-view>
    </b-col>
  </b-row>
</template>

<script>
import { mdbView, mdbMask } from 'mdbvue'

export default {
  componets: {
    mdbView,
    mdbMask
  }
}
</script>

<style>

</style>

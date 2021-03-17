<template>
  <div class="footer">
    <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
      <mdb-container class="text-center text-md-left">
        <mdb-row class="text-center text-md-left mt-3 pb-3">
          <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              {{ $t('name') }}
            </h6>
            <p class="text-uppercase mb-4 font-weight-bold">
              {{ $t('free') }}
            </p>
            <p class="mb-4 font-weight-bold">
              markweb.varga@gmail.com
            </p>
          </mdb-col>
          <hr class="w-100 clearfix d-md-none">
        </mdb-row>
        <hr>
        <mdb-row class="d-flex align-items-center">
          <mdb-col md="8" lg="8">
            <p class=" text-center text-md-left grey-text">
              &copy; {{ $t('name') }} {{ year }} Copyright: {{ $t('reserve') }}
            </p>
          </mdb-col>
          <mdb-col md="4" lg="4" class="ml-lg-0">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/vargabeni69/" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/varga-mark-61796a197/" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in" /></a>
                </li>
              </ul>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  },
  data: () => ({
    date: new Date()
  }),
  computed: {
    year () {
      return this.date.getFullYear()
    }
  }
}
</script>

<style>
  .footer {
    background: #eacda3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d6ae7b, #eacda3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #d6ae7b, #eacda3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: black;
  }

  .mt-4 {
    margin-top: 0 !important;
  }

  .input {
    margin-top: 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid white;
    color: white;
    background: rgb(82, 73, 73);
    outline: none;
  }

  ::placeholder {
    color: white;
  }

  .button {
    margin-top: 20px;
    color: white;
  }

  .stylish-color-dark {
    background: #eacda3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d6ae7b, #eacda3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #d6ae7b, #eacda3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: black !important;
  }

  .block {
    display: block;
  }
</style>

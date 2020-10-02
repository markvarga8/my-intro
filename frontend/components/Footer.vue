<template>
  <div class="footer">
     <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
      <mdb-container class="text-center text-md-left">
        <mdb-row class="text-center text-md-left mt-3 pb-3">
          <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">{{$t('name')}}</h6>
            <p class="text-uppercase mb-4 font-weight-bold">{{$t('free')}}</p>
            <p class="text-uppercase mb-4 font-weight-bold">36-30-517-54-22</p>
            <p class="mb-4 font-weight-bold">ben1998deguz@gmail.com</p>
          </mdb-col>
          <hr class="w-100 clearfix d-md-none" />
          <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">{{$t('message')}}</h6>
            <b-form>
              <input class="input" type="text" placeholder="Name">
              <input class="input" type="email" placeholder="Email">
              <textarea
                class="input textarea"
                name=""
                cols="20"
                rows="5"
                placeholder="Message"
              />
              <b-button class="button-background block mx-auto" variant="outline">{{$t('send')}}</b-button>
            </b-form>
          </mdb-col>
        </mdb-row>
        <hr />
        <mdb-row class="d-flex align-items-center">
          <mdb-col md="8" lg="8">
            <p class=" text-center text-md-left grey-text">&copy; Varga Mark 2020 Copyright: Minden jog fentartva</p>
          </mdb-col>
          <mdb-col md="4" lg="4" class="ml-lg-0">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item"><a href="https://www.facebook.com/vargabeni69/" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/varga-mark-61796a197/" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
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
  }
}
</script>

<style>
  .footer {
    background: rgb(82, 73, 73) !important;
    color: white;
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
    background: rgb(82, 73, 73) !important;
  }

  .block {
    display: block;
  }
</style>

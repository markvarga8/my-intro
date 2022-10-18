<template>
  <mdb-container>
    <mdb-modal size="fluid" :show="createPost" @close="createPost = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Create post</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input v-model="blog.title" label="Title" type="text" class="mb-5"/>
        <mdb-input v-model="blog.image" label="Image Url" type="text" class="mb-5"/>
        <VueEditor v-model="blog.content" />
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click="post">Create</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <mdb-card class="mb-3">
      <!-- <mdb-view class="d-flex justify-content-center" hover>
        <a href="#!">
          <mdb-card-image
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
            alt="Card image cap"/>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view> -->  <!-- to do -->
      <mdb-card-body class="text-center">
        <mdb-card-title>Card with waves effect</mdb-card-title>
        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
        <mdb-btn @click.native="createPost=true" color="primary">Create</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <mdb-card class="mb-3" v-for="(post, i) in posts" :key="i">
      <mdb-view class="d-flex justify-content-center" hover>
        <a href="#!">
          <mdb-card-image
            :src="post.image"
            alt="Card image cap"/>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </a>
      </mdb-view>
      <mdb-card-body class="text-center">
        <mdb-card-title>{{post.title}}</mdb-card-title>
        <mdb-card-text v-html="post.content" />
        <mdb-btn color="primary">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbModalTitle } from 'mdbvue'
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    mdbContainer,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbModalTitle,
    VueEditor
  },
  layout: 'private',
  data () {
    return {
      createPost: false,
      posts: null,
      blog: {
        title: null,
        image: null,
        content: null
      }
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async post () {
      await this.$axios.post('https://auth-a5273-default-rtdb.firebaseio.com/posts.json', this.blog)
    },

    async getPosts () {
      const result = await this.$axios.get('https://auth-a5273-default-rtdb.firebaseio.com/posts.json')

      this.posts = result.data
    }
  }
}
</script>

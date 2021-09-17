<template>
  <section class="container">
    <h1 class="blogTitle">これはGraphCMSテストブログ</h1>
    <article v-for="(post, index) in posts" :key="index">
      <div class="title">{{post.title}}</div>
      <div class="date">投稿日：{{post.openAt | format-date}}</div>
      <div class="body" v-html="post.body.html"></div>
      <img :src="post.images.url" alt="">
    </article>
  </section>
</template>

<script>
import posts from '~/apollo/queries/posts'

export default {
  data () {
    return {
      posts: {}
    }
  },
  apollo: {
    posts: {
      query: posts
    }
  }
}
</script>

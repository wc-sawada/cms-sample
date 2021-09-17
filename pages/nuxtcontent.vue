<template>
  <section class="container">
    <h1 class="blogTitle">これはNuxt Contentテストブログ</h1>
    <article v-for="(post, index) in posts" :key="index">
      <div class="title">{{post.title}}</div>
      <div class="date">投稿日：{{post.openAt | format-date}}</div>
      <div class="body">
        <NuxtContent :document="post"/>
      </div>
      <img :src="post.images" alt="">
    </article>
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    // 記事一覧を取得
    const posts = await $content('posts').fetch()
    return { posts }
  },
}
</script>

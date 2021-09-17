<template>
  <section class="container">
    <h1 class="blogTitle">これはcontentfulテストブログ</h1>
    <article v-for="(post, index) in posts" :key="index">
      <div class="title">{{post.fields.title}}</div>
      <div class="date">投稿日：{{post.fields.openAt | format-date}}</div>
      <div class="body" v-html="toHtmlString(post.fields.body)"></div>
      <img :src="post.fields.images.fields.file.url" alt="">
    </article>
  </section>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData({ params }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: process.env.CTFL_CONTENT_TYPE_POST,
      order: 'fields.openAt'
    })
    return {
      posts: entries.items
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  }
}
</script>

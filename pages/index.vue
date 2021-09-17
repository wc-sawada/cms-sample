
<template>
  <section class="index">
    <card
      v-for="i in 5"
      :key="i"
    />
  </section>
</template>
 <script>
import Card from '~/components/Card.vue'
 export default {
  components: {
    Card
  }
}
</script>
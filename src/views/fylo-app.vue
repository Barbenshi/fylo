<template>
    <section class="fylo-app container flex flex-column gap-1 full main-layout">
      <fylo-hero/>
      <main-content/>
      <!-- <toy-list  /> -->
    </section>
</template>

<script>
import fyloHero from '../components/fylo-hero.vue';
import mainContent from '../components/main-content.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  components: {
    toyList,
    fyloHero,
    mainContent
  },
}
</script>

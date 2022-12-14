<template>
  <div class="app-container">
    <section class="toy-app container flex flex-column gap-1">
      <fylo-hero/>
      <main-content/>
      <!-- <toy-list  /> -->
    </section>
  </div>
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

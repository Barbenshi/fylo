<template>
  <section class="total-app-container main-layout">
    <app-header />
    <main class="router-view-container full main-layout">
      <router-view />
    </main>
    <footer class="main-footer full">
      <app-footer/>
    </footer>
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
  components:{
    appHeader,
    appFooter
  }
}
</script>



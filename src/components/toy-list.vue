<template>
  <ul class="toy-list clean-list grid gap-1">
    <toy-preview v-for="toy in 5" :toy="toy" :key="toy._id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  components: {
    toyPreview,
  },
}
</script>

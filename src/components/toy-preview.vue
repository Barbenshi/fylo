<template>
  <li class="toy-preview flex flex-column justify-between">
        <div class="preview-content">
          <p><span class="fw-bold">Name:</span> {{ toy }}</p>
          <p><span class="fw-bold">Price:</span> {{ toy }}</p>
        </div>

        <div class="btn-group flex">
          <button  class="btn btn-info">details</button>
          <button class="btn btn-dark">edit</button>
          <button  class="btn btn-light">delete</button>
        </div>
  </li>
</template>

<script>
// import customToyd from './custom-toyd.vue'

export default {
  name: 'toy-preview',
  props: {
    toy: Number,
  },
  components: {
  },
}
</script>

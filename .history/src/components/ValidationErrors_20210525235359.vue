<template>
  <ul class="error-messages">
    <li v-for="errorMessage in "></li>
  </ul>
</template>

<script>
export default {
  name: 'ValidationErrors',
  props: {
    validationErrors: {
       type: Object,
       require: true,
       default: null
    }
  },
  computed: {
    errorMessage() {
      return false
    }
  },
}
</script>


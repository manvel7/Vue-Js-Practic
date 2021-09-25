<template>
  <ul class="error-message">
    <li v-for=></li>
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


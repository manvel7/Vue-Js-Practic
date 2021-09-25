<template>
  <ul class="error-messages">
    <li v-for="error in errorMessages" :key="error">
      {{ error }}
    </li>
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
    errorMessages() {
      return Object.keys(this.validationErrors).
    }
  },
}
</script>


<template>
  <div>

  </div>
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


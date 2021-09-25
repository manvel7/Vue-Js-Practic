<template>
  <div>
    Valiadtion Errors
  </div>
</template>

<script>
export default {
  name: 'ValidationErrors',
  props: {
    validationErrors: {
       type: Object,
       require: true
    }
  }
}
</script>


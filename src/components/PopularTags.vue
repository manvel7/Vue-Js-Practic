<template>
  <div>
    <mvc-loading v-if='isLoading' />
    <mcv-error-message v-if='error' :message='error'/>
    <div v-if='popularTags' class='sidebar'>
      <p>Popular Tags</p>
      <div class='tag-list'>
        <router-link
          v-for='popularTag in popularTags'
          :key='popularTag'
          :to="{name: 'tag', params: {slug: popularTag}}"
          class='tag-default tag-pill'
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import MvcLoading from './Loading'
import McvErrorMessage from './ErrorMessage'

export default {
  name: 'MvcPopularTags',
  components: {McvErrorMessage, MvcLoading},
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>

<style scoped>

</style>
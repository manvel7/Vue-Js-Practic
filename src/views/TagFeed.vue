<template>
  <div class='home-page'>
    <mvc-banner />
    <div class='container'>
      <div class='row'>
        <div class='col-md-9'>
          <mcv-feed-toggler :tag-name='tagName' />
          <mcv-feed :apiUrl='apiUrl' />
        </div>
        <div class='col-md-3'>
          <mvc-popular-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed'
import MvcPopularTags from '@/components/PopularTags'
import MvcBanner from '@/components/Banner'
import McvFeedToggler from '@/components/FeedToggler'

export default {
  name: 'MvcTagFeed',
  components: {
    MvcBanner,
    MvcPopularTags,
    McvFeed,
    McvFeedToggler
  },
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    }
  }
}
</script>

<style scoped>

</style>
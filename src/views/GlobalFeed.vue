<template>
  <div class='home-page'>
    <mvc-banner />
    <div class='container'>
      <div class='row'>
        <div class='col-md-9'>
          <mcv-feed-toggler />
          <mcv-feed :apiUrl='apiUrl'/>
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
  name: 'McvGlobalFed',
  components: {
    McvFeedToggler,
    MvcBanner,
    MvcPopularTags,
    McvFeed
  },
  data: () => ({
    apiUrl: '/articles',
  }),
}
</script>

<style scoped>

</style>
<template>
  <div class='feed-toggle'>
    <ul class='nav nav-pills outline-active'>
      <li class='nav-item' v-if='isLoggedIn'>
        <router-link
          :to="{name: 'user-feed'}" class='nav-link'
          :class="{active: routeName === 'user-feed'}"
        >
          Your Feed
        </router-link>
      </li>
      <li class='nav-item'>
        <router-link
          :to="{name: 'global-feed'}" class='nav-link'
          :class="{active: routeName === 'global-feed'}"
        >
          Global Feed
        </router-link>
      </li>
      <li class='nav-item' v-if='tagName'>
        <router-link :to="{name: 'tag'}" class='nav-link'
                     :class="{active: routeName === 'tag'}"
        >
          <i class='ion-pound' />
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {gettersTypes} from '@/store/modules/auth'

export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      require: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: gettersTypes.isLoggedIn
    }),
    routeName () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class='article-page'>
    <div class='banner'>
      <div class='container' v-if='article'>
        <h1>{{ article.title }}</h1>
        <div class='article-meta'>
          <router-link
            :to="{name: 'user-profile', params: {slug: article.author.username}}"
          >
            <img v-if='article.author.image' :src='article.author.image' alt='user-image' />
            <img v-else class='user-pic' src='../assets/download.jpg' alt='user-default-image' />
          </router-link>
          <div class='info'>
            <router-link
              :to="{name: 'user-profile', params: {slug: article.author.username}}"
            >
              {{ article.author.username }}
            </router-link>
            <span class='date'>{{ article.createdAt }}</span>
          </div>
          <span v-if='isAuthor'>
            <router-link
              class='btn btn-outline-secondary btn-sm'
              :to="{name: 'edit-article',params: {slug: article.slug}}"
            >
              <i class='ion-edit' />
              Edit Article
            </router-link>
            <button class='btn btn-outline-danger btn-sm' @click='deleteArticle'>
              <i class='ion-trash-a' />
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class='container page'>
      <mvc-loading v-if='isLoading' />
      <mcv-error-message v-if='error' />
      <div class='row article-content' v-if='article'>
        <div class='col-xs-12'>
          <div>
            <p>{{ article.body }}</p>
          </div>
          <mcv-tag-list :tags='article.tagList'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes as articleActionType} from '@/store/modules/article'
import {gettersTypes as authGetterType} from '@/store/modules/auth'
import {mapGetters, mapState} from 'vuex'
import MvcLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'
import McvTagList from '../components/TagList'

export default {
  name: 'McvArticle',
  components: {McvTagList, McvErrorMessage, MvcLoading},
  computed: {
    ...mapState({
      article: state => state.article.data,
      isLoading: state => state.article.isLoading,
      error: state => state.article.error
    }),
    ...mapGetters({
      currentUser: authGetterType.currentUser
    }),
    isAuthor() {
      if (!this.article && !this.currentUser) return false
      return this.currentUser.username === this.article.author.username
    }
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch(articleActionType.deleteArticle, {
        slug: this.$route.params.slug
      }).then(() => {
        this.$router.push({name: 'global-feed'})
      })
    }
  },
  mounted() {
    this.$store.dispatch(articleActionType.getArticleAction, {
      slug: this.$route.params.slug
    })
  }
}
</script>

<style scoped>

</style>
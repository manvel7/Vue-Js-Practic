<template>
  <div>
    <mvc-loading v-if='isLoading' />
    <mcv-article-form
      v-if='initialValues'
      :initialValues='initialValues'
      :errors='validationErrors'
      :is-submitting='isSubmitting'
      @articleSubmit='onSubmit'
    />
  </div>
</template>

<script>
import McvArticleForm from '@/components/ArticleForm'
import {actionTypes} from '@/store/modules/article'
import {mapState} from 'vuex'
import MvcLoading from '../components/Loading'

export default {
  name: 'McvCreateArticle',
  components: {MvcLoading, McvArticleForm},
  computed: {
    ...mapState({
      isSubmitting: state => state.article.isSubmitting,
      validationErrors: state => state.article.validationErrors,
      isLoading: state => state.article.isLoading,
      article: state => state.article.data
    }),
    initialValues() {
      if(!this.article) {
        return null
      }
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticleAction,{
      slug: this.$route.params.slug
    })
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug
      this.$store.dispatch(actionTypes.updateArticleAction, {slug,articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    }
  }
}
</script>

<style scoped>

</style>
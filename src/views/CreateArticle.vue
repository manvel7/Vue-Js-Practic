<template>
  <div>
    <mcv-article-form
      :initial-values='initialValues'
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

export default {
  name: 'McvCreateArticle',
  components: {McvArticleForm},
  data: () => ({
    initialValues: {
      title: '',
      description: '',
      body: '',
      tagList: []
    }
  }),
  computed: {
    ...mapState({
      isSubmitting: state => state.article.isSubmitting,
      validationErrors: state => state.article.validationErrors
    })
  },
  methods: {
    onSubmit(articleInput) {
      this.$store.dispatch(actionTypes.createArticleAction, {articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    }
  }
}
</script>

<style scoped>

</style>
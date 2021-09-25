import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: false,
  isSubmitting: false,
  validationErrors: null,
}

//mutation Types
export const mutationTypes = {
  getArticleStart: '[article] getArticleStart',
  getArticleSuccess: '[article] getArticleSuccess',
  getArticleFailed: '[article] getArticleFailed',
  //delete article
  deleteArticleStart: '[article] deleteArticleStart',
  deleteArticleSuccess: '[article] deleteArticleSuccess',
  deleteArticleFailed: '[article] deleteArticleFailed',
  //createArticle
  createArticleStart: '[article] createArticleStart',
  createArticleSuccess: '[article] createArticleSuccess',
  createArticleFailed: '[article] createArticleFailed',
  //update Article
  updateArticleStart: '[article] updateArticleStart',
  updateArticleSuccess: '[article] updateArticleSuccess',
  updateArticleFailed: '[article] updateArticleFailed'
}
//action Types
export const actionTypes = {
  getArticleAction: '[article] getArticleAction',
  deleteArticleAction: '[article] deleteArticleAction',
  createArticleAction: '[article] createArticleAction',
  updateArticleAction: '[article] updateArticleAction'
}

const mutations = {
  //get Popular Tag mutations
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getArticleFailed](state) {
    state.isLoading = false
  },
  //delete article
  [mutationTypes.deleteArticleStart]() {
  },
  [mutationTypes.deleteArticleSuccess]() {
  },
  [mutationTypes.deleteArticleFailed]() {
  },
  //create Article
  [mutationTypes.createArticleStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.createArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.createArticleFailed](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  //update Article
  [mutationTypes.updateArticleStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.updateArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.updateArticleFailed](state) {
    state.isSubmitting = false
  },
}

const actions = {
  [actionTypes.getArticleAction]({commit}, slug) {
    return new Promise((resolve) => {
      commit(mutationTypes.getArticleStart, slug)
      articleApi.getArticle(slug).then(article => {
        commit(mutationTypes.getArticleSuccess, article)
        resolve(article)
      }).catch(() => {
        commit(mutationTypes.getArticleFailed)
      })
    })
  },
  //delete article
  [actionTypes.deleteArticleAction]({commit}, slug) {
    return new Promise((resolve) => {
      commit(mutationTypes.deleteArticleStart, slug)
      articleApi.deleteArticle(slug).then(() => {
        commit(mutationTypes.deleteArticleSuccess)
        resolve()
      }).catch(() => {
        commit(mutationTypes.deleteArticleFailed)
      })
    })
  },
  //create Article
  [actionTypes.createArticleAction]({commit}, {articleInput}) {
    return new Promise(resolve => {
      commit(mutationTypes.deleteArticleStart, articleInput)
      articleApi.createArticle(articleInput).then(article => {
        commit(mutationTypes.createArticleSuccess, article)
        resolve(article)
      }).catch((error) => {
        commit(
          mutationTypes.createArticleFailed,
          error.response.data.errors
        )
      })
    })
  },
  //update article
  [actionTypes.updateArticleAction]({commit}, {slug, articleInput}) {
    return new Promise(resolve => {
      commit(mutationTypes.updateArticleStart)
      articleApi.updateArticle(slug, articleInput).then(article => {
        commit(mutationTypes.updateArticleSuccess, article)
        resolve(article)
      }).catch(() => {
        commit(mutationTypes.updateArticleFailed)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
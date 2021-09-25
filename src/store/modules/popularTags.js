import popularTagApi from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: false
}
//mutation Types
export const mutationTypes = {
  getPopularTagsStart: '[popularTag] getPopularTagsStart',
  getPopularTagsSuccess: '[popularTag] getPopularTagsSuccess',
  getPopularTagsFailed: '[popularTag]getPopularTagsFailed'
}
//action Types
export const actionTypes = {
  getPopularTags: '[popularTag] getPopularTags'
}

const mutations = {
  //get Popular Tag mutations
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPopularTagsFailed](state) {
    state.isLoading = false
  }
}

const actions = {
  //get Popular Tag Action
  [actionTypes.getPopularTags]({commit}) {
    return new Promise((resolve) => {
      commit(mutationTypes.getPopularTagsStart)
      popularTagApi.getPopularTags().then(tags => {
        commit(mutationTypes.getPopularTagsSuccess, tags)
        resolve(tags)
      }).catch(() => {
        commit(mutationTypes.getPopularTagsFailed)
      })
    })
  }
}


export default {
  state,
  mutations,
  actions
}
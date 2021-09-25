import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: false
}
//mutation Types
export const mutationTypes = {
  getFeedStart: '[feed] getFeedStart',
  getFeedSuccess: '[feed] getFeedSuccess',
  getFeedFailed: '[feed] getFeedFailed'

}
//action Types
export const actionTypes = {
  getFeed: '[feed] getFeed'
}

const mutations = {
  //get Feed mutations
  [mutationTypes.getFeedStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getFeedSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getFeedFailed](state) {
    state.isLoading = false
  }
}

const actions = {
  //get Feed
  [actionTypes.getFeed]({commit}, {apiUrl}) {
    return new Promise((resolve) => {
      commit(mutationTypes.getFeedStart)
      feedApi.getFeed(apiUrl).then(response => {
        commit(mutationTypes.getFeedSuccess, response.data)
        resolve(response.data)
      }).catch(() => {
        commit(mutationTypes.getFeedFailed)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
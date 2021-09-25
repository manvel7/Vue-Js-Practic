import authApi from '@/api/auth'

const state = {
  isSubmitted: false,
  currentUser: null,
}

const mutations = {
  registerStart(state) {
    state.isSubmitted = true
  },
  registerSuccess (state) {
    state.isSubmitted = false
  },
  registerFailed (state) {
    state.isSubmitted = false
  }
}

const actions = {
   register({commit}, credentials) { 
    return new Promise((resolve) => {
      commit('registerStart')
      authApi.register(credentials).then(response => {
        commit('registerSuccess', response.data.user)
        resolve(response.data.user)
      })
        .catch(error => {
          commit('registerFailed', error.response.data.errors)
          console.log('Error:', error)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
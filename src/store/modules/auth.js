import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistancStorage'

//state
const state = {
  isSubmitted: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
  isLoading: false
}

//getter Types
export const gettersTypes = {
  currentUser: '[auth] currentUser',
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous'

}

//mutations type
export const mutationTypes = {
  registerStart: '[auth]registerStart',
  registerSuccess: '[auth]registerSuccess',
  registerFailed: '[auth]registerFailed',

  loginStart: '[auth]loginStart',
  loginSuccess: '[auth]loginSuccess',
  loginFailed: '[auth]loginFailed',

  getCurrentUserStart: '[auth]getCurrentUserStart',
  getCurrentUserSuccess: '[auth]getCurrentUserSuccess',
  getCurrentUserFailed: '[auth]getCurrentUserFailed'
}

//actions
export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getCurrentUser: '[auth] getCurrentUser'
}

//getters
const getters = {
  [gettersTypes.currentUser]: state => {
    return state.currentUser
  },
  [gettersTypes.isLoggedIn]: state => {
    return Boolean(state.isLoggedIn)
  },
  [gettersTypes.isAnonymous]: state => {
    return state.isLoggedIn === false
  }
}

//mutations
const mutations = {
  //register mutations
  [mutationTypes.registerStart](state) {
    state.isSubmitted = true
    state.validationErrors = null
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitted = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationTypes.registerFailed](state, payload) {
    state.isSubmitted = false
    state.validationErrors = payload
  },

  //login mutations
  [mutationTypes.loginStart](state) {
    state.isSubmitted = true
    state.validationErrors = null
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitted = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationTypes.loginFailed](state, payload) {
    state.isSubmitted = false
    state.validationErrors = payload
  },

  //getCurrentUserMutations
  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationTypes.getCurrentUserFailed](state) {
    state.isSubmitted = false
    state.isLoggedIn = false
    state.currentUser = null
  }
}



const actions = {
  //register action
  [actionTypes.register]({commit}, credentials) {
    return new Promise((resolve) => {
      commit(mutationTypes.registerStart)
      authApi.register(credentials).then(response => {
        commit(mutationTypes.registerSuccess, response.data.user)
        setItem('accessToken', response.data.user.token)
        resolve(response.data.user)
      }).catch(error => {
          commit(mutationTypes.registerFailed, error.response.data.errors)
      })
    })
  },
  //login action
  [actionTypes.login]({commit}, credentials) {
    return new Promise((resolve) => {
      commit(mutationTypes.loginStart)
      authApi.login(credentials).then(response => {
        commit(mutationTypes.loginSuccess, response.data.user)
        setItem('accessToken', response.data.user.token)
        resolve(response.data.user)
      }).catch(error => {
          commit(mutationTypes.loginFailed, error.response.data.errors)
      })
    })
  },
  //getCurrentUserAction
  [actionTypes.getCurrentUser]({commit}) {
    return new Promise((resolve) => {
      commit(mutationTypes.getCurrentUserStart)
      authApi.getCurrentUser().then(response => {
        commit(mutationTypes.getCurrentUserSuccess, response.data.user)
        resolve(response.data.user)
      }).catch(() => {
          commit(mutationTypes.getCurrentUserFailed)
      })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
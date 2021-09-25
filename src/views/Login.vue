<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>Sign up</h1>
          <p class='text-xs-center'>
            <router-link :to="{name: 'register'}">
              Need an account?
            </router-link>
          </p>
          <validation-errors v-if='validationErrors' :validation-errors='validationErrors' />
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                v-model.trim='email'
                placeholder='Email'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
                v-model.trim='password'
                placeholder='Password'
              />
            </fieldset>
            <button type='submit' class='btn btn-lg btn-primary pull-xs-right' :disabled='isSubmitted'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'Login',
  components: {
    ValidationErrors
  },
  data: () => ({
    email: '',
    password: ''
  }),
  computed: {
    ...mapState({
      isSubmitted: state => state.auth.isSubmitted,
      validationErrors: state => state.auth.validationErrors,
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(actionTypes.login, {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({name: 'global-feed'})
      })
    }
  }
}
</script>

<style scoped>

</style>
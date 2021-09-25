<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>Sign up</h1>
          <p class='text-xs-center'>
            <router-link :to="{name: 'login'}">
              Need an account?
            </router-link>
          </p>
          <validation-errors :validationErrors="validationErrors" />
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                v-model.trim="username"
                placeholder='Username'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                v-model.trim="email"
                placeholder='Email'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
                v-model.trim="password"
                placeholder='Password'
              />
            </fieldset>
            <button type='submit' class='btn btn-lg btn-primary pull-xs-right' :disabled='isSubmitted'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'
export default {
  name: 'McvRegister',
  components: {
    ValidationErrors
  },
  data: () => ({
    username: '',
    email: '',
    password: '',
  }),
  computed: {
    isSubmitted() {
      return this.$store.state.auth.isSubmitted
    },
    validationErrors () {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register',{
        username: this.username,
        email: this.email,
        password: this.password 
      }).then(user => {
        this.$router.push({name: 'home'},user)
      })
    }
  }
}
</script>

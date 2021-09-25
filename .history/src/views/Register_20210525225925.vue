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
          VALIDATION ERRORS
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Username'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Email'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
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
export default {
  name: 'McvRegister',
  computed: {
    isSubmitted() {
      return this.$store.state.auth.isSubmitted
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register',{
        username: 'gajfhjlghfjgh',
        email: 'jhdfjd@gmail.com',
        password: '6565fadafd'
      }).then(user => {
        console.log('Succesfuly register new user', user)
      })
    }
  }
}
</script>

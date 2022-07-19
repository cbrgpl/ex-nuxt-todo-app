<template >
  <ZPage >
    <ZAuthCard >
      <template #subtitle >
        Don't have account? <NuxtLink :to="{name: 'auth-signUp'}" >
          Sign Up
        </NuxtLink>
      </template>

      <ZLogInForm @submitted="logIn" />
    </ZAuthCard>
  </ZPage>
</template>

<script>
import { setTitleInRouteMeta } from '@mixins/setTitleInRouteMeta.js'

import ZLogInForm from '@auth_components/composite/zLogInForm.vue'

export default {
  name: 'TheLogin',
  components: {
    ZLogInForm,
    ZAuthCard: () => import( '@auth_components/composite/zAuthCard.vue' )
  },
  mixins: [
    setTitleInRouteMeta( 'Log In' )
  ],
  methods: {
    logIn ( { logInData, rememberMe } ) {
      console.log( 'Log In', logInData, rememberMe )
    }
  }

}

</script>

<style lang="scss" scoped>
</style>

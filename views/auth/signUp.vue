<template >
  <ZPage >
    <ZAuthCard subtitle="Start using the service right now!" >
      <template #subtitle >
        Already have account? <NuxtLink :to="{name: 'auth-logIn'}" >
          Log In
        </NuxtLink>
      </template>

      <ZSignUpForm @submitted="signUp" />
    </ZAuthCard>
  </ZPage>
</template>

<script>
import { setTitleInRouteMeta } from '@mixins/setTitleInRouteMeta.js'
import ZSignUpForm from '@auth_components/composite/zSignUpForm.vue'

export default {
  name: 'TheRegister',
  components: {
    ZSignUpForm,
    ZAuthCard: () => import( '@auth_components/composite/zAuthCard.vue' )
  },
  mixins: [
    setTitleInRouteMeta( 'Sign Up' )
  ],
  methods: {
    signUp ( signUpData ) {
      console.log( 'Sign Up', signUpData )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

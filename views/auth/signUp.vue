<template >
  <ZPage >
    <ZAuthCard subtitle="Start using the service right now!" >
      <NuxtLink :to="{name: 'auth-logIn'}" >
        login
      </NuxtLink>
    </ZAuthCard>
  </ZPage>
</template>

<script>
import { setTitleInRouteMeta } from '@mixins/setTitleInRouteMeta.js'

export default {
  name: 'TheRegister',
  components: {
    ZAuthCard: () => import( '@auth_components/composite/zAuthCard.vue' )
  },
  mixins: [
    setTitleInRouteMeta( 'Registration' )
  ],
}
</script>

<style lang="scss" scoped>

</style>

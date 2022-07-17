<template >
  <ZPage class="logion-page" >
    <NuxtLink :to="{name: 'auth-registration'}" >
      registrationn
    </NuxtLink>
  </ZPage>
</template>

<script>
import { setTitleInRouteMeta } from '@mixins/setTitleInRouteMeta.js'

export default {
  name: 'TheLogin',
  mixins: [
    setTitleInRouteMeta( 'Registration' )
  ],
}

</script>

<style lang="scss" scoped>

</style>

<template >
  <div >
    <NuxtLink :to="{name: 'auth-login'}" >
      login
    </NuxtLink>
  </div>
</template>

<script>
import { setTitleInRouteMeta } from '@mixins/setTitleInRouteMeta.js'

export default {
  name: 'TheRegister',
  mixins: [
    setTitleInRouteMeta( 'Registration' )
  ],
}
</script>

<style lang="scss" scoped>

</style>

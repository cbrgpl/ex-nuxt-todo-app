<template >
  <v-app >
    <span v-show="title" >
      {{ pageTitle }}
    </span>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  data () {
    return {
      pageTitle: ''
    }
  },
  watch: {
    $route: {
      handler ( $route ) {
        this.title = $route.meta.emptyLayoutTitle ? $route.meta.emptyLayoutTitle : ''
      },
      immediate: true,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

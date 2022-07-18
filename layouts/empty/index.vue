<template >
  <v-app >
    <PTitle >
      {{ pageTitle }}
    </PTitle>
    <div class="empty-layout__content" >
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import PTitle from './-partials/pTitle.vue'

export default {
  name: 'EmptyLayout',
  components: {
    PTitle,
  },
  data () {
    return {
      pageTitle: ''
    }
  },
  watch: {
    $route: {
      handler ( $route ) {
        setTimeout( () => {
          this.pageTitle = $route.meta.emptyLayoutTitle ? $route.meta.emptyLayoutTitle : ''
        }, 0 )
      },
      immediate: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.empty-layout__content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>

<template >
  <v-card class="auth-card" >
    <v-card-subtitle v-if="showSubtitle" >
      <slot name="subtitle" >
        {{ subtitle }}
      </slot>
    </v-card-subtitle>

    <v-card-text >
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ZAuthCard',
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSubtitle () {
      return !!this.title || !!this.$slots.subtitle
    }
  }
}
</script>

<style lang="scss" scoped >
.auth-card {
  width: 100%;
  max-width: $page-card-max-width;
}
</style>

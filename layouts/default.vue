<template >
  <BaseLayout >
    <Nuxt />
  </BaseLayout>
</template>

<script>
import BaseLayout from './_util_layouts/baseLayout.vue'

export default {
  name: 'DefaultLayout',
  components: {
    BaseLayout
  }
}
</script>

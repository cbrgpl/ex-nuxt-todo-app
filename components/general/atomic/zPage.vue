<template >
  <div class="page" >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ZPage',
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>

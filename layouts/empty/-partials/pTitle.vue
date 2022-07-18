<template >
  <h5 class="empty-layout__title" >
    <slot />
  </h5>
</template>

<script>
export default {
  name: 'PTitle'
}
</script>

<style lang="scss" scoped>
.empty-layout__title {
  position: absolute;
  top: rem(24px);
  width: 100%;
  font-size: rem(20px);
  line-height: 1;
  text-align: center;
}

@media #{map-get($display-breakpoints, "md-and-up")} {
  .empty-layout__title {
    top: 2em;
    left: 4em;
    font-size: rem(28px);
    text-align: left;
  }
}

@media #{map-get($display-breakpoints, "lg-and-up")} {
  .empty-layout__title {
    font-size: rem(32px);
  }
}
</style>

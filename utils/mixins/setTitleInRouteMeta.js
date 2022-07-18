export const setTitleInRouteMeta = ( title ) => {
  return {
    created () {
      this.$route.meta.emptyLayoutTitle = title
    }
  }
}

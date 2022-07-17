export const setTitleInRouteMeta = ( title ) => {
  return {
    mounted () {
      this.$route.meta.emptyLayoutTitle = title
    }
  }
}

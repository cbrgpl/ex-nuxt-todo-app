<template >
  <v-form
    class="form"
    @submit.prevent="validate" >
    <slot />

    <div class="d-flex" >
      <slot name="actions" >
        <v-btn
          type="submit"
          color="secondary"
          class="form__button" >
          {{ buttonText }}
        </v-btn>
      </slot>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'ZForm',
  props: {
    buttonText: {
      type: String,
      default: 'Submit'
    },
    vuelidate: {
      type: Object,
      required: true,
    },
  },
  emits: [ 'submit' ],

  methods: {
    // Public
    validate () {
      this.vuelidate.$reset()
      this.vuelidate.$touch()

      if ( this.vuelidate.$error ) {
        return
      }

      this.$emit( 'submit' )
    },

    // Private

  }

}
</script>

<style lang="scss" scoped>
.form {
  &__button {
    width: 100%;
    max-width: rem(240px);
    margin-left: auto;
    font-weight: 600;
  }
}

</style>

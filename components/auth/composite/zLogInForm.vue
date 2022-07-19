<template >
  <ZForm
    ref="form"
    :vuelidate="$v"
    button-text="Log In"
    @submit="emitSubmitted" >
    <div >
      <v-text-field
        v-model="form.email"
        append-icon="mdi-gmail"
        autofocus
        label="Enter email:"
        :error-messages="$v.form.email.$errors?.[0]"
        :error="$v.form.email.$error"
        placeholder="example@gmail.com" />

      <v-text-field
        v-model="form.password"
        append-icon="mdi-keyboard"
        label="Enter password:"
        :error-messages="$v.form.password.$errors?.[0]"
        :error="$v.form.password.$error"
        placeholder="****"
        type="password" />

      <v-checkbox
        v-model="rememberMe"
        label="Remember me?" />
    </div>
  </ZForm>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from '@validators'

import { formMethodsMixin } from '@general_components/composite/zForm'

export default {
  name: 'ZAuthForm',
  components: {
    ZForm: () => import( '@general_components/composite/zForm/zForm.vue' )
  },
  mixins: [ validationMixin, formMethodsMixin ],
  emits: [ 'submitted' ],
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rememberMe: true,
    }
  },
  computed: {
    vv () {
      return this.$v.form.email.$errors
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength( 8 )
      },
      password: {
        required,
        minLength: minLength( 4 )
      }
    },
  },
  methods: {
    emitSubmitted () {
      const clone = Object.assign( {}, this.data.form )
      this.$emit( 'submitted', { logInData: clone, rememberMe: this.rememberMe } )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

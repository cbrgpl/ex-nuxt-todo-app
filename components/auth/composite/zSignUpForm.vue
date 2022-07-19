<template >
  <ZForm
    ref="form"
    :vuelidate="$v"
    button-text="Log In"
    @submit="emitSubmitted" >
    <div class="mb-5" >
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

      <v-text-field
        v-model="form.repeatPassword"
        append-icon="mdi-keyboard"
        label="Repeat password:"
        :error-messages="$v.form.repeatPassword.$errors?.[0]"
        :error="$v.form.repeatPassword.$error"
        placeholder="****"
        type="password" />

      <v-text-field
        v-model="form.name"
        append-icon="mdi-account"
        label="Enter name:"
        :error-messages="$v.form.name.$errors?.[0]"
        :error="$v.form.name.$error" />

      <v-text-field
        v-model.number="form.age"
        append-icon="mdi-numeric"
        label="Enter age:"
        :error-messages="$v.form.age.$errors?.[0]"
        :error="$v.form.age.$error"
        placeholder="18 - 99" />
    </div>
  </ZForm>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  sameAs,
  between,
  numeric
} from '@validators'

import { formMethodsMixin } from '@general_components/composite/zForm'

export default {
  name: 'ZSignUpForm',
  mixins: [ validationMixin, formMethodsMixin ],
  data () {
    return {
      form: {
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        age: '',
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength( 4 )
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs( 'password' )
      },
      name: {
        required,
      },
      age: {
        required,
        numeric,
        between: between( 18, 99 ),
      },

    }
  },
  methods: {
    emitSubmitted () {
      const clone = Object.assign( {}, this.form )
      this.$emit( 'submitted', clone )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

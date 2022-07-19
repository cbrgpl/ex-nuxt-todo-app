export const formMethodsMixin = {
  created () {
    this.mixErrorMessagesForFields( this.$v )
  },
  methods: {
    // Public
    reset ( ...args ) {
      this.$refs.form.reset( ...args )
    },
    validate ( ...args ) {
      this.$refs.form.validate( ...args )
    },

    // Private
    mixErrorMessagesForFields ( vuelidatePart ) {
      const keys = Object.keys( vuelidatePart )

      for ( const key of keys ) {
        if ( key[ 0 ] !== '$' && !this.isValidator( vuelidatePart[ key ] ) ) {
          if ( this.isField( vuelidatePart[ key ] ) ) {
            this.createFieldWatcher( vuelidatePart[ key ] )
          } else {
            this.mixErrorMessagesForFields( vuelidatePart[ key ] )
          }
        }
      }
    },
    isValidator ( val ) {
      return typeof val === 'boolean'
    },
    isField ( vuelidatePart ) {
      return typeof vuelidatePart.$model !== 'object'
    },
    createFieldWatcher ( fieldValidation ) {
      const validatorProps = Object.keys( fieldValidation ).filter( prop => prop[ 0 ] !== '$' )
      this.$set( fieldValidation, '$errors', [] )

      fieldValidation.$watcher = this.$watch(
        () => [ fieldValidation.$model, fieldValidation.$error ],
        () => {
          if ( fieldValidation.$dirty ) {
            this.mixErrorsToField( fieldValidation, validatorProps )
          }
        },
        {
          immediate: true,

        }
      )
    },
    mixErrorsToField ( fieldValidation, validatorProps ) {
      fieldValidation.$errors.splice( 0 )

      for ( const validator of validatorProps ) {
        if ( !fieldValidation[ validator ] ) {
          const validatorParams = fieldValidation.$params[ validator ]

          fieldValidation.$errors.push( validatorParams.errorMessage )
        }
      }
    }
  }
}

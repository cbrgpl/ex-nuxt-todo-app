// ! There is 2 groups of imported validators: function that are validator && function that returns validator;
// ! So I need to define type of each validator manually;

import * as validators from 'vuelidate/lib/validators'
import {
  helpers
} from 'vuelidate/lib/validators'

const groups = {
  validators: {
    errors: {
      required: 'Value is required',
      alpha: 'Value must be alpha only',
      alphaNum: 'Value must be alphaNum',
      numeric: 'Must contains only numeric symbols',
      integer: 'Must be number',
      decimal: 'Must contains decimal smbls? what?',
      email: 'Invalid email format',
      ipAddress: 'Value must be valid ip address',
      url: 'Value must be valid url',
    },
    names: [
      'required',
      'alpha',
      'alphaNum',
      'numeric',
      'integer',
      'decimal',
      'email',
      'ipAddress',
      'url'
    ]
  },
  validatorFactories: {
    errors: {
      requiredIf: () => 'requiredIf error',
      requiredUnless: () => 'requiredUnless error',
      minLength: minLength => `Min length is ${ minLength }`,
      maxLength: maxLength => 'maxLength error',
      minValue: min => 'minValue error',
      maxValue: max => 'maxValue error',
      between: ( min, max ) => `Must be more then ${ min } and less then ${ max }`,
      macAddress: separator => `Mac address with ${ separator } error`,
      sameAs: ( fieldPath ) => {
        const splittedFieldPath = fieldPath.split( '.' )
        const fieldName = splittedFieldPath[ splittedFieldPath.length - 1 ]

        return () => `Must be the same as ${ fieldName }`
      },
      not: () => 'Not error',
      or: () => 'Or error',
      and: () => 'And error',
    },
    names: [
      'requiredIf',
      'requiredUnless',
      'minLength',
      'maxLength',
      'minValue',
      'maxValue',
      'between',
      'macAddress',
      'sameAs',
      'not',
      'or',
      'and',
    ]
  }
}

const modifyValidator = ( validator, errorMessage ) => {
  return helpers.withParams(
    { errorMessage },
    val => validator( val )
  )
}

const modifyValidatorFactory = ( factory, getErrorMessage ) => {
  return ( ...args ) => {
    const validator = factory( ...args )

    return helpers.withParams(
      { errorMessage: getErrorMessage( ...args ) },
      ( val, vm ) => validator( val, vm )
    )
  }
}

const modifyValidators = () => {
  return Object.keys( validators ).reduce( ( modifiedValidators, validator ) => {
    if ( groups.validators.names.includes( validator ) ) {
      const error = groups.validators.errors[ validator ]
      modifiedValidators[ validator ] = modifyValidator( validators[ validator ], error )
    } else {
      const error = groups.validatorFactories.errors[ validator ]
      modifiedValidators[ validator ] = modifyValidatorFactory( validators[ validator ], error )
    }

    return modifiedValidators
  }, {} )
}

export const {
  required,
  alpha,
  alphaNum,
  numeric,
  integer,
  decimal,
  email,
  ipAddress,
  url,

  requiredIf,
  requiredUnless,
  minLength,
  maxLength,
  minValue,
  maxValue,
  between,
  macAddress,
  sameAs,
  not,
  or,
  and,
} = modifyValidators()

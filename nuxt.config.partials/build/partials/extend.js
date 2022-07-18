export const extend = ( config, { isClient } ) => {
  console.log( 'config' )
  if ( isClient ) {
    console.log( '\n\n\n\n---------------------------------' )
    console.log( JSON.stringify( config, null, 1 ) )
    console.log( '---------------------------------\n\n\n\n ' )
  }
}

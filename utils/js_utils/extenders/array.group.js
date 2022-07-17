export default ( array, getGroupKey = el => el ) => {
  return array.reduce( ( acc, elem ) => {
    const elemKey = getGroupKey( elem ).toString()
    const groupAccordanceToKey = Object.keys( acc ).find( key => key === elemKey )

    if ( groupAccordanceToKey ) {
      const group = acc[ elemKey ]
      group.push( elem )
    } else {
      const newGroup = [ elem ]
      acc[ elemKey ] = newGroup
    }

    return acc
  }, {} )
}

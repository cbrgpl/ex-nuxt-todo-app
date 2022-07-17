const path = require( 'path' )

const appDir = path.resolve( __dirname, '../' )

export const alias = {
  '@': path.resolve( appDir ),

  '@scss': path.resolve( appDir, 'assets' ),

  '@general_components': path.resolve( appDir, 'components', 'general' ),
  '@auth_components': path.resolve( appDir, 'components', 'auth' ),
  '@todo_components': path.resolve( appDir, 'components', 'todo' ),

  '@layouts': path.resolve( appDir, 'layouts' ),

  '@enums': path.resolve( appDir, 'enums' ),
  '@icons': path.resolve( appDir, 'assets', 'icons' ),
  '@images': path.resolve( appDir, 'assets', 'images' ),

  '@errors': path.resolve( appDir, 'utils', 'errors' ),
  '@functions': path.resolve( appDir, 'utils', 'functions' ),
  '@mixins': path.resolve( appDir, 'utils', 'mixins' ),
  '@modules': path.resolve( appDir, 'utils', 'modules' ),
  '@services': path.resolve( appDir, 'utils', 'services' ),
  '@validators': path.resolve( appDir, 'utils', 'validators' ),

  // eslint-disable-next-line camelcase
  js_utils: path.resolve( appDir, 'utils', 'js_utils' ),
  consts: path.resolve( appDir, 'static', 'enums', 'consts.js' )
}

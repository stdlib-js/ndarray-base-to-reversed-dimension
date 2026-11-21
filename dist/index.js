/** @license Apache-2.0 */

'use strict';

/**
* Return a new ndarray where the order of elements of an input ndarray along a specified dimension is reversed.
*
* @module @stdlib/ndarray-base-to-reversed-dimension
*
* @example
* var ndarray = require( '@stdlib/ndarray-ctor' );
* var toReversedDimension = require( '@stdlib/ndarray-base-to-reversed-dimension' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var y = toReversedDimension( x, 0 );
* // returns <ndarray>[ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*
* sh = y.shape;
* // returns [ 3, 2 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

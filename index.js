console.log("Color Converter Instructions:")
console.log("To convert from hex color, enter \"hex \\hexColor\".")
console.log("To convert from rgb color, enter \"rgb r g b.\"")

const hexRgb = require('./hexToRgb')
const rgbHex = require('./rgbToHex')
const convertHSL = require('./toHsl')

switch ( process.argv[2] ) {
    case 'hex':
    console.log ( "rgb \( " + hexRgb.hexToRgb(process.argv[3]).r + ", " + hexRgb.hexToRgb(process.argv[3]).g + ", "  + hexRgb.hexToRgb(process.argv[3]).b + " \)");
    console.log ( convertHSL.hexToHsl(process.argv[3]));
    break;
    case 'rgb':
    console.log ( rgbHex.rgbToHex( parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]) ) );
    console.log ( convertHSL.rgbToHsl ( parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]) ) );
    break;
}
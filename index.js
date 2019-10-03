console.log("Color Converter Instructions:")
console.log("To convert from hex color to rgb color, enter \"hex \\hexColor\".")
console.log("To convert from rgb color to hex color, enter \"rgb r g b.\"")

const hex = require('./hexToRgb')
const rgb = require('./rgbToHex')

if ( process.argv[2] === "hex" ) {
    console.log ( "rgb \( " + hex.hexToRgb(process.argv[3]).r + ", " + hex.hexToRgb(process.argv[3]).g + ", "  + hex.hexToRgb(process.argv[3]).b + " \)")
} else if ( process.argv[2] === "rgb" ) {
    console.log ( rgb.rgbToHex( parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]) ) )
}
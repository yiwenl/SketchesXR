// main.js
import getColorTheme from '../src/index.js'
// import getColorTheme from '../build/get-color-theme.js';

const colors0 = getColorTheme(1, 'Array', false)
const colors1 = getColorTheme(1, 'Object')
const colors2 = getColorTheme(255, 'Array')
const colors3 = getColorTheme(255, 'Object')
const colors4 = getColorTheme('hex')

console.table(colors0)
console.table(colors1)
console.table(colors2)
console.table(colors3)
console.log(colors4)

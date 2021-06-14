# get-color-theme
Get random color theme ( of 5 colors )

## Installation
```npm install get-color-themes```

## Usage 
`const getColorTheme = (mType = 1, mReturnType = 'Array')`

mType : 1, 255 or 'hex'
mReturnType : 'Array' or 'Object'


```
import getColorTheme from 'get-color-themes';

const colors0 = getColorTheme(1, 'Array'); /* [[1, .5, .2] ... ] */
const colors1 = getColorTheme(1, 'Object'); /* [{r:1, g:.5, b:.2} ... ] */
const colors2 = getColorTheme(255, 'Array'); /* [[255, 128, 50] ... ] */
const colors3 = getColorTheme(255, 'Object'); /* [{r:255, g:128, b:50} ... ] */
const colors4 = getColorTheme('hex'); /* ['#ff8032' ... ] */
```
l
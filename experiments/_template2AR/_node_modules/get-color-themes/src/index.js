// index.js

import ColorThemes from './ColorThemes'
import hexRgb from 'hex-rgb'

/*
mType: 'hex', 1, 255
mReturnType : 'Array' => [r, g, b] / 'Object => {r, g, b}';
*/

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const getColorTheme = (mType = 1, mReturnType = 'Array', mShuffle = true) => {
  const index = Math.floor(Math.random() * ColorThemes.length)
  let colorTheme = ColorThemes[index]
  if (mShuffle) {
    colorTheme = shuffle(colorTheme)
  }

  if (mType === 'hex') {
    return colorTheme
  }

  colorTheme = colorTheme.map(v => hexRgb(v))

  if (mType === 1) {
    colorTheme.forEach(color => {
      color.red /= 255
      color.green /= 255
      color.blue /= 255
      color.alpha /= 255
    })
  }

  colorTheme = colorTheme.map(color => {
    if (mReturnType === 'Array') {
      return [color.red, color.green, color.blue]
    } else {
      return {
        r: color.red,
        g: color.green,
        b: color.blue
      }
    }
  })

  return colorTheme
}

export default getColorTheme

const defaultRootCSSVariables = {
  "--light-bg": "#ffac26",
  "--light-bg-dark-shadow": "#FF9D00",
  "--light-bg-light-shadow": "#FFBB4D",
  "--dark-bg": "#1c1c1c",
  "--dark-bg-dark-shadow": "#141414",
  "--dark-bg-light-shadow": "#262626",
  '--white': '#ffffff',
  '--black': '#000000',
  "--primary": "#ffcc33",
  "--primary-dark": "#ffbf00",
  "--primary-light": "#ffd966",
  '--g-text-color-light': 'rgba(28, 28, 28, 1)',
  '--g-text-color-disabled-light': 'rgba(0, 0, 0, 0.38)',
  '--g-text-color-secondary-light': 'rgba(0, 0, 0, 0.60)',
  "--g-text-color-dark": "rgba(255, 190, 50, 1)",
  '--g-text-color-disabled-dark': 'rgba(255, 255, 255, 0.38)',
  '--g-text-color-secondary-dark': 'rgba(255, 255, 255, 0.60)',
  '--g-bg-color-disabled-light': '#dee5e8',
  '--g-bg-color-disabled-dark': '#727272'
}

/**
 * Function to change a given css variable
 * @param {*} element
 * @param {*} variable
 * @param {*} value
 */
export const setCSSVariable = (element, variable, value) => {
  if (element && value) {
    element.style.setProperty(variable, String(value))
  }
}

/**
 * Getter function to fetch all default css variables object
 */
export const getDefaultThemeVariables = () => {
  return defaultRootCSSVariables
}

/**
 * Function to change root css variables
 * @param {*} themeObject
 */
export const overrideThemeVariables = (themeObject) => {
  const root = document.querySelector(':root')
  const themeVariables = Object.keys(themeObject)
  if (root && themeObject) {
    themeVariables.forEach((themeVar) => {
      const varValue = themeObject[themeVar]
      if (varValue && themeVar.startsWith('--')) {
        setCSSVariable(root, themeVar, varValue)
      }
    })
  }
}

/**
 *
 * @param {*} path
 * @param {*} element
 */
export const detectElementInDOM = (path = [], element = 'null') => {
  return path
    .map((elem) => elem.nodeName)
    .join('-')
    .toLowerCase()
    .includes(element.toLowerCase())
}

/**
 *
 * @param {*} event : DOM click event
 * @param {*} node : DOM node to detect click inside of
 */

export const findClickInside = (event, node) => {
  let currentNode = event.target
  try {
    do {
      if (currentNode === node) {
        // click is inside
        return true
      }
      currentNode = currentNode.parentNode
    } while (currentNode)
    // click is outside
    return false
  } catch (err) {
    throw new Error(err)
  }
}

import React from 'react'
import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  const script = `
(function () {
  function getImplicitPreference() {
    var mediaQuery = '(prefers-color-scheme: dark)'
    var mql = window.matchMedia(mediaQuery)
    if (typeof mql.matches === 'boolean') return mql.matches ? 'dark' : 'light'
    return null
  }
  function themeIsValid(theme) {
    return theme === 'light' || theme === 'dark'
  }
  var themeToSet = '${defaultTheme}'
  var preference = window.localStorage.getItem('${themeLocalStorageKey}')
  if (themeIsValid(preference)) themeToSet = preference
  else {
    var implicit = getImplicitPreference()
    if (implicit) themeToSet = implicit
  }
  document.documentElement.setAttribute('data-theme', themeToSet)
})();
`.replace(/\n\s*/g, '')

  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  )
}

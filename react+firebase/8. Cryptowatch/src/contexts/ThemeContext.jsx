import {useState, useEffect, createContext, useContext} from 'react'

const getInitialTheme = () => {
    /* This function is used to determine the initial theme for the application. It first checks if the browser supports local storage (to store and retrieve the theme preference).
    If there's a stored theme preference in the local storage, it returns that value.
    If no stored theme preference is found, it checks the user's preferred color scheme using the window.matchMedia method. If the preferred color scheme is dark, it returns 'dark', otherwise, it returns 'light'. */

    // In client-side JavaScript, like in web browsers, the window object is available and represents the global context of the browser window. By using typeof window !== 'undefined', developers can ensure that the code that relies on the window object (or any other browser-specific functionality) is only executed when running in a browser environment. This prevents errors and exceptions from being thrown when the code is executed on the server-side, where the window object is not present.

    // LocalStorage is a web browser feature that allows web applications, including React applications, to store key-value pairs locally on the user's device.
    // Storing Data: localStorage.setItem(key, value)
    // Retrieving Data: localStorage.getItem(key)

    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')
        // Checking if there's a value here
        if (typeof storedPrefs === 'string') {
            return storedPrefs
        }
        // If no stored theme is found
        // window.matchMedia is a JavaScript method that allows you to check if a given CSS media query is currently matched or not. The window.matchMedia method returns a MediaQueryList object, which has properties and methods to determine the current state of the media query. Properties --> matches: A boolean property indicating whether the media query currently matches the viewport. If matches is true, it means the media query condition is satisfied.
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        } 
    }
    // otherwise return light
    return 'light'
}

const ThemeContext = createContext()
export const useThemeContext = () => (useContext(ThemeContext))

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    /* This function is used to set the theme for the application and update the UI accordingly. It takes the theme as an argument and does the following:
            It gets the root element of the document (usually the html element).
            It adds the appropriate CSS class ('dark' or 'light') to the root element, and removes the other class.
            It also stores the selected theme in the user's local storage using localStorage.setItem('color-theme', theme). */
    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(()=> {
        rawSetTheme(theme)
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
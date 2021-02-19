import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'

// Theme is an object which has following properties  defination set by Material UI guys
//  1 Palette
//  2 Typography    -> To work with the text inside of the app
//  3 Spacing       -> To set the spacing between components 
//  4 Breakpooints  -> Layout of component across various screen sizes
//  5 Z-index
//  6 Globals

//? How to create a theme object
// use createMuiTheme to create a theme object
const theme = createMuiTheme({
        palette: {},
        typography: {},
        spacing: {},
        breakpoints: {},
        zindex:{},
        globals:{}
})

//? How to apply theme to the app
export default function CustomTheme() {
    return (
        <ThemeProvider theme={theme}>
            <div></div>
        </ThemeProvider>
    )
}


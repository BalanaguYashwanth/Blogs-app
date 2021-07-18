import React from 'react'
import logo from './logo.svg';
import Product from './screens/product'
import { createTheme, ThemeProvider } from '@material-ui/core'
import MasterForm from './screens/MasterForm'

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;

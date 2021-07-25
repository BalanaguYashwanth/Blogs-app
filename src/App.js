import React from 'react'
import logo from './logo.svg';
import Product from './screens/product'
import Explore from './screens/explore'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Product />
          </Route>

          <Route exact path='/explore'>
            <Explore />
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;


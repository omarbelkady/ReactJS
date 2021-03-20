import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';


const myTheme = createMuiTheme({
  palette:{
    main: '#fefefe'
  },
  secondary: blue,
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular:500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;

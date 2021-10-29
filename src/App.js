import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

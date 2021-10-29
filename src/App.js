import { Footer, Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

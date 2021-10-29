import { Footer, Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";
import { Home, About, Blog, Portfolio } from "./pages/";

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
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

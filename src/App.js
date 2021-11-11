import { Footer, Header } from "./components";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from "./GlobalStyles";
import { Home, About, Blog, Portfolio, Contact, PortfolioItem, NotFound } from "./pages/";

const App = () => {
  return (
    <Router basename="/react-jetro">
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
          <Route exact path="/portfolio/:title">
            <PortfolioItem />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

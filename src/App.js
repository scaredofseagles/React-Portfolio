import Navbar from './components/Navbar'
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;

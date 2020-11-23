import Navbar from './components/Navbar'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;

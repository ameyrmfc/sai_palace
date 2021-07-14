import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header";
// import Footer from './Footer';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
            <Route path="">
                <Header/>
                {/* <Footer/> */}
            </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

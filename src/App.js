import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Platform from "./Components/Platform";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/platform/:platform" component={Platform} />
      </Router>
    </div>
  );
}

export default App;

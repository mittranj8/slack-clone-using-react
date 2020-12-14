import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app_body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              {/* <Chat /> */}
              <h1>Chat Screen</h1>
            </Route>
            <Route path="/">
              <h1>Welcome to Slack App</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

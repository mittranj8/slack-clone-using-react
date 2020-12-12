import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>

      {/* React Router */}
    </div>
  );
}

export default App;

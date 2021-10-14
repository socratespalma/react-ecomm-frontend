import "./styles/main.scss";
import AppRouter from "./navigation/AppRouter";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

// To generate csrf token
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

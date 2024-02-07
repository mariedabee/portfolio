import logo from "./logo.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div>
        <p>hello, i am mariam</p>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Your weight : {data}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;

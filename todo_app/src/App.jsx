import "./Style.css";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>TODO</h1>
      </div>
      <ToDo />
    </div>
  );
}

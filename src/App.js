import Graph from "./components/graph"
import Matrix from "./components/matrix"
import InputField from "./components/input"
import './App.css';

function App() {
  return (
    <div class="main">

      <h1>Customer Projection Modeler</h1>
      <InputField />
      <div class="graph-container">

      <Graph/>

      </div>
    </div>
  );
}

export default App;

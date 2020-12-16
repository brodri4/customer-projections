import Graph from "./components/graph"
import Matrix from "./components/matrix"
import InputField from "./components/input"
import './App.css';

function App() {
  return (
    <div class="main">

      <h1>Customer Projection Modeler</h1>
      <h5>A Markov Chain system is one which experiences transitions from one state to another 
        according to certain probabilistic rules. One practical application of Markov Chain systems is to 
        model customer flow between various different competeting companies. By knowing the initial distibution
        state, we can make accurate predictions for any finite number of future states. We can also find the
        final distribution state in which the system reaches stable equilibrium.  
      </h5>
      <InputField />
      <div class="graph-container">

      <Graph/>

      </div>
    </div>
  );
}

export default App;

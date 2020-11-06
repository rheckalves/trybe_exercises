import './App.css';

const createTask = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Codar', 'Almoçar', 'Trybe', 'Codar', 'Jantar', 'Codar', 'Dormir'];

function App() {
  return (
    <div>
      <ol className="App">
        {tasks.map(task => createTask(task))}
      </ol>
    </div>
  );
}

export default App;

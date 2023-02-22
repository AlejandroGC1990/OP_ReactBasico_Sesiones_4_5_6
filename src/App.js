import logo from './logo.svg';
import './App.css';
// import Clock from './components/clock';
import ClockFuncional from './hooks /clockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Clock /> */}
        <ClockFuncional />

      </header>
    </div>
  );
}

export default App;

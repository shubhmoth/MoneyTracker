import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>MoneyTracker</h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={'Samsung TV'} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={'Description'} />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Samsung TV</div>
            <div className="date">12-05-2024</div>
          </div>
          <div className="right">
            <div className="amount">1200</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

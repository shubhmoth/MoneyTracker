import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const addNewTransaction = (e) => {
    e.preventDefault();
    console.log(name, price, category, datetime, description);
  }
  return (
    <main>
      <h1>₹69,420</h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={'Samsung TV'} />
          <input type="text" 
                 value={datetime}
                 onChange={(e) => setDatetime(e.target.value)}
                 placeholder="DD-MM-YYYY HH:MM" 
                 onFocus={(e) => (e.target.type = "datetime-local")}
                 onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <div className="description">
          <input type="text" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 placeholder={'Description'} />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Salary</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price green">₹26404</div>
            <div className="category">Credit</div>
            <div className="datetime">01-05-2024 12:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Russian</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price red">₹6000</div>
            <div className="category">Groceries</div>
            <div className="datetime">10-05-2024 12:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Rent</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price red">₹5000</div>
            <div className="category">Utilities</div>
            <div className="datetime">12-05-2024 12:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Mobile Recharge</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price red">₹69</div>
            <div className="category">Utilities</div>
            <div className="datetime">12-05-2024 12:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Credit Card Bill</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price red">₹1200</div>
            <div className="category">Bill Payment</div>
            <div className="datetime">12-05-2024 12:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Interest Received</div>
            <div className="description">This is a description</div>
          </div>
          <div className="right">
            <div className="price green">₹180</div>
            <div className="category">Credit</div>
            <div className="datetime">15-05-2024 12:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

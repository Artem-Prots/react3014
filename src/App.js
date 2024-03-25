import './App.css';
import Item from './components/Item';

function App() {
  return (
    <form>
      <Item/>
      <button type="submit" className="submit">Отправить</button>
    </form>
  );
}

export default App;

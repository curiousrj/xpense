import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AddExpense from './pages/addXpense';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-xpense/" element={<AddExpense />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

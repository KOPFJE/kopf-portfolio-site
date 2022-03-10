import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

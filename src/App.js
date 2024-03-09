import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Roles/Contributor/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Dashboard />} path='/contributor'  ></Route>
        <Route element="" path='/admin'  ></Route>
        <Route element="" path='/customer'  ></Route>
        <Route element={<Login />} path='/login'  ></Route>
        <Route element={<Register />} path='/register'  ></Route>
      </Routes>
    </div>
  );
}

export default App;

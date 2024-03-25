import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Roles/Contributor/Dashboard';
import Homepage from './Pages/Home/Homepage';
import Category from './Pages/Category/Category';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App font-mullish">
      <Routes>
        <Route element={<Homepage />} path=''></Route>
        <Route element={<Dashboard />} path='/contributor'></Route>
        <Route element="" path='/admin'  ></Route>
        <Route element="" path='/customer'  ></Route>
        <Route element={<Login />} path='/login'  ></Route>
        <Route element={<Category />} path='/category'  ></Route>
        <Route element={<Product />} path='/product'  ></Route>
        <Route element={<Register />} path='/register'  ></Route>
      </Routes>
    </div>
  );
}

export default App;

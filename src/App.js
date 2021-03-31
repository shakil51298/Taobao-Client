import './App.css';
import Home from './Components/Home/Home';
import AddProducts from './Components/AddProducts/AddProducts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/Not-Found/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import { createContext, useState } from 'react';
import CheckOut from './Components/CheckOut/CheckOut';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
export const productContext = createContext()
function App() {
  const [product , setProduct] = useState([])
  return (
    <productContext.Provider value = {[product , setProduct]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addproducts">
            <AddProducts/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct/>
          </Route>
          <Route path="/procesChekout/:id">
            <CheckOut/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </productContext.Provider>
  );
}

export default App;

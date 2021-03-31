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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
export const userContext = createContext()
function App() {
  const [loggedInuser , setloggedInuser] = useState({})
  return (
    <userContext.Provider value = {[loggedInuser , setloggedInuser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute path="/addproducts">
            <AddProducts/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/manageProduct">
            <ManageProduct/>
          </PrivateRoute>
          <PrivateRoute path="/Orders">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/procesChekout/:id">
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;

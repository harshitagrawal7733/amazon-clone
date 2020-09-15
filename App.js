import React,{useEffect}  from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Checkout from './Checkout'
import {auth} from './firebase'
import {useStateValue } from "./StateProvider"

import './App.css';
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("this is", authUser)
      if(authUser)
      {
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else
        {
            dispatch({
          type:'SET_USER',
          user:null
        })
        }

    })

  }, [])
  return (
<Router>
    <div className="App">
 <Switch>
 <Route path="/Login">
     <Login/>
 </Route>
   <Route path="/Checkout">
  <Header/>
  <Checkout/>

   </Route>
   <Route path="/">
       <Header/>
       <Home/>
   </Route>
</Switch>
    </div>
  </Router>
  );
}

export default App;

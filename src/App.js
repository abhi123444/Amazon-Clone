import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import CreateAc from './CreateAc';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
    "pk_test_51IxA25SJ5szdLzajfqnvO5bOsfCrmQSm8dEjGWo2CncujOmbcrlTpuOibQrbqxsnYyaQ3DZP3W093l5re2Uc6dQK00JLe91vME"
);
function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(function(data) {
            console.log(data);
            if(data){
                dispatch({
                    type: 'SET_USER',
                    user: data
                })
            }else{
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
            
        })
    },[])

    

    return (
        <Router>
            <div className="main_app">
                <Switch>
                    <Route path="/create-account">
                        <CreateAc />
                    </Route>
                    <Route path="/login">
                        <LoginEmail />
                    </Route>
                    <Route path="/pass">
                        <LoginPassword />
                    </Route>
                    <Route path="/payment">
                        <Navbar />
                        <Elements stripe = {promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/orders">
                        <Navbar />
                        <Orders />
                    </Route>
                    <Route path="/checkout">
                        <Navbar />
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Navbar />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;

import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const LoginContainer= () => {

    const [email,setEmail] = useState('');
    let history = useHistory();
    const onEmailchange = (event) =>setEmail(event.target.value);
	const EmailSend = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/pass',
            email: email,
        });
    }
    const createAcc = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/create-account'
        });
    }
    
    return(
        <div className="LoginContainer">
            <Link to='/'>
                <img className="LoginContainer_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
            </Link>
            <div className="LoginContainer_container">
                <h1>Sign-In</h1>
                <form>
                    <p>Email</p>
                    <input type='text' onChange={onEmailchange} />  
                    <button onClick={EmailSend}>Continue</button>  
                </form>  
                <p>By continuing, you agree to Amazon's Fake Clone <a href='#'>Conditions of Use</a> and <a href='#'>Privacy</a> Notice.</p>  
                <div className="help">
                    <ArrowRightIcon />
                   <a href='#'>Need help?</a>
                </div>
            </div>
            <div className="newAccount">
                <div></div>
                <p>New&nbsp;to&nbsp;amazon?</p>
                <div></div>
            </div>
            <button onClick={createAcc}>Create Amazon account</button>
        </div>
    )
}

export default LoginContainer;
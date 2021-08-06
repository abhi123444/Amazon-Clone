import React, {useState,useEffect} from 'react';
import './Login.css';
import {Link , useLocation,useHistory} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {auth} from "./firebase";
const LoginPassword= (props) => {

    const location = useLocation();
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    useEffect(() => {
        setEmail(location.email);
       
     }, [location]);
     console.log(email);
    const onPasswordchange = (event) =>setPassword(event.target.value);
   
    const loginapp = () => {
        console.log({email , password})
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setEmail('');
                setPassword('');
                history.push('/');  
             })
            .catch((error) => {
                 console.log(error);
                 alert(error.message);
                 setEmail('');
                 setPassword('');
            });
        history.push('/login');
    }
    return(

        <div className="LoginContainer">
            <Link to='/'>
                <img className="LoginContainer_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
            </Link>
            <div className="LoginContainer_container">
                <h1>Sign-In</h1>
                <span>{email}<Link to='/login'><p className="emailchange"> Change</p></Link></span>
                <form>
                    <div className="passfor">
                        <p>Password </p>
                        <a href='#'>Forget&nbsp;your&nbsp;password?</a>
                    </div>
                    <input type='password' onChange={onPasswordchange}/>  
                    <button onClick={loginapp}>Sign-In</button>  
                </form>    
                <div className="help">
                    <span><input type="checkbox" />keep me signed in.</span>
                    <span>                       
                        <a href='#'>Details</a>
                        <ArrowDropDownIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginPassword;
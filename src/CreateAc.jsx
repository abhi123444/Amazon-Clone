import React, {useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import firebase from "firebase";

const CreateAc= () => {
        const history = useHistory();
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [repassword,setRepassword] = useState('');

        const onEmailchange = (event) =>setEmail(event.target.value);
        const onPasswordchange = (event) =>setPassword(event.target.value);
        const onRepasswordchange = (event) =>setRepassword(event.target.value);

        const createAccount = e => {
            e.preventDefault();
            (password === repassword) 
                ?
                    firebase.auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            setEmail('');
                            setPassword(''); 
                            setRepassword('');
                            history.push('/');
                        })
                        .catch((error) => {
                            alert(error.message);
                            setEmail('');
                            setPassword('');
                            setRepassword('');
                    })
                : 
                    alert('Please check Password..!');            
                    
        }
        
       
    return(
        <div className="LoginContainer">
            <Link to='/'>
                <img className="LoginContainer_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
            </Link>
            <div className="LoginContainer_container">
                <h1>Create Account</h1>
                <form>
                    <p>Enter Email</p>
                    <input type='text' value = {email} onChange={onEmailchange}/>  
                    <p>Password</p>
                    <input type='text' value = {password} onChange={onPasswordchange} /> 
                    <h6><DoneIcon style={{width:"15px"}}/>Passwords must be at least 6 characters.</h6>
                    <p>Re-Enter Password</p>
                    <input type='text' value = {repassword} onChange={onRepasswordchange} /> 
                    <button onClick={createAccount}>Create your amazon account</button>
                    <Link to="/login"><a>Already have a account..</a></Link>
                </form>  
                <p>By continuing, you agree to Amazon's Fake Clone <a href='#'>Conditions of Use</a> and <a href='#'>Privacy</a> Notice.</p>  
            </div>
        </div>
    )
}

export default CreateAc;
import React from "react";
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
function Navbar() {
    const [{ basket, user }, dispatch] = useStateValue();

    const hundleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="container">
            <div className="header">
                <Link to="/">
                    <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>

                <div className="header_search">
                    <input className="header_searchInput" type="text" name="" id="" />
                    <div className="header_search_icon"><SearchIcon /></div>
                </div>

                <div className="header_nav">
                    <Link to={!user && '/login'}>
                        <div onClick={hundleAuth} className="header_option">
                            <span className="header_optionLineone">
                                hello,{user && user.email }
                            </span>
                            <span className="header_optionLinetwo">
                                {user ? 'Sign Out' : 'Sign In'}
                            </span>

                        </div>
                    </Link>
                    <Link to={user ? '/orders': '/login'}>
                    <div className="header_option">
                   
                        <span className="header_optionLineone">
                            Return
                        </span>
                        <span className="header_optionLinetwo">
                            & Orders
                        </span>
                    </div>
                    </Link>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLinetwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
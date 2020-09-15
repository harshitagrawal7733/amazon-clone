
import React from 'react'
import './Header.css';
import Product from './Product'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue } from "./StateProvider"
import {auth} from './firebase'
function Header()
{
  const [{basket,user},dispatch] = useStateValue();
  const headerAuthentication=()=>{
    if(user)
    {
      auth.signOut();
    }
  }
  return(
    <div className='Header'>
    <Link to="/">
  <img className="header_logo" alt="amazon-logo" src="https://safeinwarwickshire.files.wordpress.com/2016/11/amazon.jpg"
  />
  </Link>

  <div className='header_search'>
      <input
        className="header_input" type="text"/>
      <SearchIcon className="header_searchItem"/>
    </div>
    <div className='header_nav'>
    <Link to={!user && '/Login'}>
      <div onClick={headerAuthentication} className='header_option'>

          <span className="header_optionLineOne">Hello</span>

          <span className="header_optionLineTwo" >{user ? 'Sign Out' : 'Sign In'}</span>
      </div>
    </Link>
    <div className='header_option'>
    <span className="header_optionLineOne">Return</span>
      <span className="header_optionLineTwo">&orders</span>
    </div>

    <div className='header_option'>
    <span className="header_optionLineOne">Your</span>
      <span className="header_optionLineTwo">Prime</span>
    </div>
  </div>

  <div className="header_optionBasket">
  <Link to="./Checkout">
  <ShoppingBasketIcon className="header_ShoppingBasket"/>

  <span className="header_optionLineTwo header_BasketCount">{basket?.length}</span>
</Link>
  </div>
</div>

  )
}
export default Header;

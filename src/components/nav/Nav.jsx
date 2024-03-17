import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <Link to="/">
          <img
            className={style.logo}
            src="https://i.pinimg.com/originals/12/06/1f/12061f54ee55f6336c972ad01350b857.png"
            alt="logo"
          />
          </Link>
          
          <h4>Learn Online</h4>
        </div>
        <div className={style.nav_details}>
          <NavLink to="courses">{({isActive})=> (
            <button>{isActive? 'On Courses' : 'Go To Courses'}</button>
          )}</NavLink>
          
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;

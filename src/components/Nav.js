import {
  faCartShopping,
  faPeopleArrows,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";
import { validateAction } from "../store";
import classes from "./Nav.module.css";
//thanh phan nav, dieu huong trang theo route
function Nav() {
  const dispatch = useDispatch();
  const data = SaveFormLocalStorage("arrActive");

  if (!!data === true) {
    dispatch(validateAction.OnLogin(!!data));
  } else {
    dispatch(validateAction.LogOut(false));
  }
  const { isSign } = useSelector((state) => state.validate);
  SaveFormLocalStorage("arrActive");
  console.log(isSign);
  const handleLogout = () => {
    setFormLocalstorage("arrActive", null);
    dispatch(validateAction.LogOut(false));
    return;
  };
  return (
    // 
    <Fragment>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}>
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingTop: "15px",
            }}>
              {/* hai link chinh huong den trang home va shop */}
            <div style={{ paddingRight: "27px" }}>
              <NavLink
                to={"/home"}
                className={({ isActive }) => {
                  return isActive ? classes.orange : "";
                }}>
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => {
                  return isActive ? classes.orange : "";
                }}>
                Shop
              </NavLink>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingRight: "30px",
              paddingTop: "15px",
              justifyContent: "space-around",
            }}>  {/* hai url chinh huong den trang gio hang va login signup */}
            <div style={{position : 'relative', top : '-2px'}}>
            
              <NavLink
                to={"/cart"}
                className={({ isActive }) => (isActive ? classes.orange : "")}>
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </NavLink>
            </div>
            <div
              style={{
                paddingRight: "25px",
                
                fontSize: "24px",
              }}>
              {isSign && (
                <p style={{position : 'relative ', top : '-29px',fontSize : '28px',   paddingLeft: "20px",}}>
                  {data.fullName} <FontAwesomeIcon icon={faUser} />
                </p>
              )}
            </div>

            <div>
              {!isSign ? (
                <NavLink
                  to={"/register"}
                  className={({ isActive }) => {
                    return isActive ? classes.orange : "";
                  }}>
                  Login/Register
                </NavLink>
              ) : (
                // phan logout
                <NavLink  
                  to={"/home"}
                  onClick={handleLogout}
                  className={({ isActive }) => {
                    return isActive ? classes.orange : "";
                  }}>

                 (Logout)
                
                </NavLink>
               
              )}
            </div>
          </div>
        </div>
        {/* tieu de chung cua trang */}
        <div className={classes.title}>
          <p>BOUTIQUE</p>
        </div>
      </div>
    </Fragment>
  );
}
export default Nav;

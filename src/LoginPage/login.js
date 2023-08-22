import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";
import { validateAction } from "../store";
import classes from "./login.module.css";
//thanh phan signin
function SignInUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const { enteredEmail, enteredPassword, isSign } = useSelector(
    (state) => state.validate
  );
    // get cac account luu trong local storage
  const arr = SaveFormLocalStorage("arrUser");

//ham kiem tra phan login
  const handleActiveUser = () => {
    //kiem tra xem co phai da co tai khoan luu trong local stoage hay chua
    //neu chua thi dieu huong den trang dang ki
    if (arr === null) {
      navigate("/register", { replace: true });
    }
    //kiem tra xem co email va pasword nao trung khop 
    const arrActive = arr.find(
      (item) => item.email === enteredEmail && item.Password === enteredPassword
    );
    const arrActiveUser = arr.find((item) => item.email === enteredEmail);
    !!arrActiveUser ? setIsEmail(false) : setIsEmail(true);
    const arrActivePassword = arr.find(
      (item) => item.Password === enteredPassword
    );
    !!arrActivePassword === true ? setIsPassword(false) : setIsPassword(true);

    const isArr = !!arrActive;
//sau khi tim thay user
    if (isArr === true) {
      setFormLocalstorage("arrActive", arrActive);
      dispatch (validateAction.OnLogin(true))
      navigate('/home',{replace : true})
    }
  };
  return (
    <div className={classes.wrapper}>
      {/* phan background */}
      <div>
        <img src={require("../images/banner1.jpg")} alt="background" />
      </div>
{/* form sign in */}
      <div className={classes.formContainer}>
        <div style={{ paddingTop: "80px" }}>
          <h2>Log In</h2>
        </div>
        <div className={classes.enteredInput}>
          <div>
            <input
              value={enteredEmail}
              onChange={(e) => {
                dispatch(validateAction.enteredEmail(e.target.value));
              }}
              type="text"
              placeholder="Email"
            />
            {isEmail && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  right: "30%",
                  textAlign: "left",
                  left: "10%",
                  color: "red",
                }}>
              Email trùng hoặc không hợp lệ
              </p>
            )}
          </div>
          <div>
            <input
              onChange={(e) => {
                dispatch(validateAction.enteredPassword(e.target.value));
              }}
              type="text"
              placeholder="Password"
            />
            {isPassword && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  textAlign: "left",
                  left: "10%",
                  top: "-10px",
                  color: "red",
                }}>
                  Mật khẩu sai hoặc không hợp lệ
              </p>
            )}
          </div>
          <div style={{ paddingTop: "30px" }}>
            {/* nut Login*/}
            <button onClick={handleActiveUser}>Login</button>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <span>Already has an account?</span>
            <span>
              <NavLink to={"/register"}>Sign up</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInUser;

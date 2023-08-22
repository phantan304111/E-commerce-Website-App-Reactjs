import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";
import { validateAction } from "../store";
import classes from "./signup.module.scss";
function SignupUser() {
  const navigate = useNavigate()
  const [isFullName, setIsFullNaem] = useState(null);
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const dispatch = useDispatch();
 

  
    
  const { userName, enteredEmail, EnteredPhoneNumber, enteredPassword } =
    useSelector((state) => state.validate);
    const arrUser = SaveFormLocalStorage("arrUser");
   
     console.log(arrUser);
    
  const handleSumit = () => {
    enteredPassword.length < 8 ? setIsPassword(true) : setIsPassword(false);
    userName.trim() === "" ? setIsFullNaem(true) : setIsFullNaem(false);
    enteredEmail.includes("@") ? setIsEmail(false) : setIsEmail(true);
   

    if (arrUser !== null) {
      const arr = arrUser.find(item => item.email === enteredEmail);
      const isArr = !!arr
      console.log(arr);
if(isArr === true){
  console.log(arr.email);
   arr.email === enteredEmail
      ? setIsActiveUser(true)
      : setIsActiveUser(false);
  }else{
    setIsActiveUser(false)
  }
}

     
    if (
      isEmail === false &&
      isEmail === false &&
      isPassword === false &&
      isActiveUser === false
    ) {
      let arrUser = localStorage.getItem("arrUser")
        ? SaveFormLocalStorage("arrUser")
        : [];
      arrUser.push({
        fullName: userName,
        email: enteredEmail,
        Password: enteredPassword,
        phone: EnteredPhoneNumber,
      });

      setFormLocalstorage("arrUser", arrUser);
      SaveFormLocalStorage("arrUser")
      dispatch(validateAction.enteredEmail(""));
      dispatch(validateAction.enteredUserName(""));
      dispatch(validateAction.enteredPassword(""));
      navigate('/login',{replace : true})
    }
  };

  // console.log(arrUser[1].email);
  console.log(enteredEmail);
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={require("../images/banner1.jpg")} alt="hinh1" />
      </div>

      <div className={classes.formContainer}>
        <div style={{ paddingTop: "10px" }}>
          <h2>Sign up</h2>
        </div>
        <div className={classes.enteredInput}>
          <div>
            {" "}
            <input
              value={userName}
              onChange={(e) => {
                userName.trim() === ""
                  ? setIsFullNaem(true)
                  : setIsFullNaem(false);
                dispatch(validateAction.enteredUserName(e.target.value));
              }}
              type="text"
              placeholder="Full Name"
            />
            {isFullName && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  textAlign: "left",
                  left: "10%",
                  top: "-10px",
                  color: "red",
                }}>
                Trường này không để trống{" "}
              </p>
            )}
          </div>
          <div>
            <input
              value={enteredEmail}
              onChange={(e) => {
                
                enteredEmail.includes("@")
                  ? setIsEmail(false)
                  : setIsEmail(true);
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
                trường này một Email, bạn đang thiếu @
              </p>
            )}
            {!isEmail && isActiveUser && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  right: "30%",
                  textAlign: "left",
                  left: "10%",
                  color: "red",
                }}>
                Tài khoản này đã có người đăng kí
              </p>
            )}
          </div>
          <div>
            <input
              value={enteredPassword}
              onChange={(e) => {
                enteredPassword.length < 8
                  ? setIsPassword(true)
                  : setIsPassword(false);
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
                Mật khẩu phải lớn hơn 8 kí tự
              </p>
            )}
          </div>
          <div>
            <input    style={{
                  height: "70px",
                  width: "75%"
                }}
              value={EnteredPhoneNumber}
              onChange={(e) =>
                dispatch(validateAction.EnteredPhoneNumber(e.target.value))
              }
              type="number"
              placeholder="Phone"
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button onClick={handleSumit}>Sign up</button>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <span>Login?</span>{" "}
            <span>
              <NavLink to={"/login"}>Click</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupUser;

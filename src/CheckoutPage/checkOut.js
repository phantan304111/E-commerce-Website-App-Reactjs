import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveFormLocalStorage } from "../LocalStorage/localStore";
import classes from "./checkOut.module.scss";
import DecimalFormat, { RoundingMode } from "decimal-format";
import { popupAction, validateAction } from "../store";
import ProductsSuccsesfully from "../components/backdropSuccsess";
function CheckOut() {
  const [isFullName, setIsFullNaem] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const { userName, enteredEmail, EnteredPhoneNumber, enteredPassword } =
    useSelector((state) => state.validate);
  
  const dispatch = useDispatch();
  const successFully = useSelector((state) => state.popup.isSuccsess);
 //format phan tien voi DecimalFormat
  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);
  const quantity = useSelector((state) => state.cart.products);
  //lay item gio hang luu tu local storage
  const products = localStorage.getItem("arrProducts")
    ? SaveFormLocalStorage("arrProducts")
    : null;

  const numberOfCartItems =
    !!products &&
    products.reduce((curNumber, item) => {
      return curNumber + item.total;
    }, 0);
  return (
    //hien thong tin san pham dat trong don
    !!products && (
      <Fragment>
        <div className={classes.wrapper}>
          <div className={classes.shopBanner}>
            <div>
              <h1>CheckOut</h1>
            </div>
            <div style={{ paddingTop: "26px" }}>
              <span>Home/Cart/</span>
              <span style={{ color: "silver" }}>Checkout</span>
            </div>
          </div>
          <h2 style={{ textAlign: "left" ,paddingLeft : '70px'}}>Bill Details</h2>
          <div className={classes.form}>
            <div className={classes.itemForm}>
              <h2 style={{ paddingLeft: "50px" }}>Your Products</h2>
              {products.map((item) => (
                <Fragment key={item.id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    key={item.id}>
                    <div>
                      <p style={{ paddingLeft: "50px" }}>
                        <b>{item.name.slice(0, item.name.indexOf("-"))} :</b>
                      </p>
                    </div>

                    <div style={{ paddingRight: "90px", fontWeight: "200" }}>
                      {" "}
                      <p>
                        {df.format(item.price)} VND x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <hr style={{ borderColor: "black" }} />
                </Fragment>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  lineHeight: "20px",
                }}>
                <div>
                  <h3>Total</h3>
                </div>
                <div style={{ paddingLeft: "58px" }}>
                  <p>
                    <b>{df.format(numberOfCartItems)} VND</b>
                  </p>{" "}
                </div>
              </div>
            </div>

            {/* thong tin nguoi dung */}
            <div className={`${classes.itemForm}`}>
              <div style={{ padding: "20px 0px 10px 20px" }}>
                <label>Full Name</label> <br />
                <input 
                  value={userName}
                  onChange={(e) => {
                    userName.trim() === ""
                      ? setIsFullNaem(true)
                      : setIsFullNaem(false);
                    dispatch(validateAction.enteredUserName(e.target.value));
                  }}
                  type="text"
                  placeholder="Enter Your Full Name Here!"
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
                    Tên không hợp lệ
                  </p>
                )}
              </div>

              <div style={{ padding: "20px 0px 10px 20px" }}>
                <label>Email</label> <br />
                <input
                  value={enteredEmail}
                  onChange={(e) => {
                    enteredEmail.includes("@")
                      ? setIsEmail(false)
                      : setIsEmail(true);
                    dispatch(validateAction.enteredEmail(e.target.value));
                  }}
                  type="text"
                  placeholder="Enter Your Email Here!"
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
                    Email không hợp lệ
                  </p>
                )}
              </div>

              <div style={{ padding: "20px 0px 10px 20px" }}>
                <label>Phone Number</label> <br />
                <input
    value={EnteredPhoneNumber}
                  onChange={(e) =>
                    dispatch(validateAction.EnteredPhoneNumber(e.target.value))
                  }
                  type="number"
                  placeholder="Enter Your Phone Number Here!"
                />

                 
              </div>

              <div style={{ padding: "20px 0px 10px 20px" }}>
                <label>Addresss</label> <br />
                <input
               value=""
                  onChange={(e) =>
                    dispatch(validateAction.enteredPassword(e.target.value))
                  }
                  type="text"
                  placeholder="Enter Your Address Here!"
                />    {isFullName && (
                  <p
                    style={{
                      fontSize: "19px",
                      position: "relative",
                      textAlign: "left",
                      left: "10%",
                      top: "-10px",
                      color: "red",
                    }}>
                    Trường này bị để trống
                  </p>)}
              </div>
            </div>
          </div>
        </div>
        {/* nut dat don hang */}
        <button
          onClick={() => dispatch(popupAction.successFully(true))}
          style={{
            width: "220px",
            height: "42px",
            background: "black",
            color: "white",
            marginRight: "1332px",
          }}>
          Place Older
        </button>
        {successFully && <ProductsSuccsesfully />}
      </Fragment>
    )
  );
}
export default CheckOut;

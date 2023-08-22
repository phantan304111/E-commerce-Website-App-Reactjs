import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttpRequest from "../hook/httpRequest";
import classes from "./ListProducts.module.scss";
import DecimalFormat, { RoundingMode } from "decimal-format";
import { useDispatch, useSelector } from "react-redux";
import { popupAction } from "../store";
import ProductsDetail from "../components/backdrop";
function ProductsList() {
  //dung useSelector va  useDispatch de xu ly state va dispatch action tu redux store
  const showDetail = useSelector((state) => state.popup.itemPopup);
  const isShow = !!showDetail;
  const dispatch = useDispatch();
  //lay state data va ham SendRequest tu custom hook useHttpRequest
  const { data, SendRequest } = useHttpRequest();
  const isdata = !!data;
  //dung decimalFormat de them dau , vao gia tien
  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);

  const handleShowProducts = (item) => {
    dispatch(popupAction.popupShow(item));
  };
//lay du lieu tu API va nap vao data
  useEffect(() => {
    SendRequest(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
  }, [SendRequest]);
//dieu huong den shopkhi nguoi dung muon xem chi tiet
  const navigate = useNavigate();
  const handleitem = () => {
    navigate("/shop", { replace: true });
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <h4 style={{ color: "#777f87", fontSize: "20px" }}>
            CAREFULLY CREATED COLLECTIONS
          </h4>
          <h2 style={{ fontSize: "30px" }}>BROWSE OUR CATEGORIES</h2>
        </div>
        {/* lay hinh anh danh muc products ti image*/}
        <div className={classes.products}>
          <div onClick={handleitem} className={classes.item}>
            <img src={require("../images/product_1.png")} alt="img" />
          </div>
          <div onClick={handleitem} className={classes.item}>
            <img src={require("../images/product_2.png")} alt="img" />
          </div>
          <div onClick={handleitem} className={classes.item}>
            <img src={require("../images/product_3.png")} alt="img" />
          </div>
          <div onClick={handleitem} className={classes.item}>
            <img src={require("../images/product_4.png")} alt="img" />
          </div>
          <div onClick={handleitem} className={classes.item}>
            <img src={require("../images/product_5.png")} alt="img" />
          </div>
        </div>
        {/* check xem co data khong, va show danh muc product san pham neu co */}
        {isdata && (
          <div className={classes.productTwo}>
            {data.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleShowProducts(item)}
                  className={classes.itemProducts}
                >
                  <img src={item.img1} alt={item.category} />
                </div>
                <div>
                  <h4 style={{ fontSize: "20px" }}>{item.name}</h4>
                </div>
                <p style={{ fontSize: "20px", color: "#777f87" }}>
                  {df.format(item.price)} VNĐ
                </p>
              </div>
            ))}
          </div>
        )}
{/* phan thong tin footer cua danh muc nay */}
        <div className={classes.otherInformation}>
          <div className={classes.information}>
            <div className={classes.itemOther}>
              <h4>FREE SHIPPING</h4>
              <p>Free Shipping worlwide</p>
            </div>
            <div className={classes.itemOther}>
              <h4>24 x 7 SERVICE </h4>
              <p>Free Shipping worlwide</p>
            </div>
            <div className={classes.itemOther}>
              <h4>FESTIVAL OFER</h4>
              <p>Free Shipping worlwide</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              paddingTop: "30px",
            }}
          >
            <div style={{ paddingLeft: "40px" }}>
              <h3>LET'S BE FRIENDS!</h3>
              <p style={{ color: "#777f87" }}>
                Nisi nisi tempor consequat laboris nisi
              </p>
            </div>
            <div style={{ display: "flex", padding: "30px" }}>
              <div>
                <input
                  style={{ width: "400px", height: "60px", fontSize: "20px" }}
                  type="text"
                />
              </div>
              <div>
                <button
                  style={{
                    width: "120px",
                    height: "60px",
                    fontSize: "20px",
                    color: "white",
                    background: "black",
                    opacity: "0.8",
                  }}
                >
                  Subcribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chi tiet ve san pham khi an vao */}
      {isShow && <ProductsDetail />}
    </Fragment>
  );
}
export default ProductsList;

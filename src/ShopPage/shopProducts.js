import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttpRequest from "../hook/httpRequest";
import { popupAction } from "../store";
import classes from "./shopProducts.module.scss";
import DecimalFormat, { RoundingMode } from "decimal-format";
import { useNavigate } from "react-router-dom";
function ShopProducts() {
  //format gia tien voi DecimalFormat
  const df = new DecimalFormat("#,##0");
  df.setRoundingMode(RoundingMode.HALF_EVEN);
  //dung useSelector va  useDispatch de xu ly state va dispatch action tu redux store
  const setinput = useSelector((state) => state.popup.searchData);
  const DataSearchProducts = useSelector(
    (state) => state.popup.SearchDataProducts
  );
  const navigae = useNavigate();
  const dispatch = useDispatch();
  
  const handleOnechangeInput = (event) => {
    dispatch(popupAction.setValueInput(event.target.value));
  };
  // Lay du lieu tu API
  const { data, SendRequest } = useHttpRequest();
  const isdata = !!DataSearchProducts;
  useEffect(() => {
    SendRequest(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
  }, [SendRequest]);
//cac ham search, soft theo danh muc, phan search input
  const searchProducts = (e) => {
    if (e.key === "Enter") {
      let ProductSearch = data.filter((value) =>
        value.category.toUpperCase().includes(setinput.toUpperCase())
      );
      console.log(ProductSearch);
      dispatch(popupAction.addSearchProducts(ProductSearch));
    }
  };
  const handleALl = () => {
    dispatch(popupAction.addSearchProducts(data));
  };
  const handleIphone = () => {
    let ProductSearch = data.filter((value) => value.category === "iphone");
    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const handleWatch = () => {
    let ProductSearch = data.filter((value) => value.category === "watch");
    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const handleAirpod = () => {
    let ProductSearch = data.filter((value) => value.category === "airpod");
    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const hanldeIpad = () => {
    let ProductSearch = data.filter((value) => value.category === "ipad");

    dispatch(popupAction.addSearchProducts(ProductSearch));
  };

  const handleKey = () => {
    let ProductSearch = data.filter((value) => value.category === "keyboard");

    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const handleMouse = () => {
    let ProductSearch = data.filter((value) => value.category === "mouse");

    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const handleOTher = () => {
    let ProductSearch = data.filter((value) => value.category === "other");

    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  const handleMacbook = () => {
    let ProductSearch = data.filter((value) => value.category === "macbook");

    dispatch(popupAction.addSearchProducts(ProductSearch));
  };
  return (
    <div className={classes.ShopContainer}>
      <div className={classes.shopBanner}>
        <div>
          <h1 style={{ fontSize: "78px", }}>Shop</h1>
        </div>
      </div>

      <div className={classes.products}>
        <div className={classes.itemProduct}>
          <div style={{ fontStyle: "italic" }}>
            <div>
              <h3 style={{ fontStyle: "italic", paddingLeft: "40px" ,background: "black",
                  paddingTop: "10px",
                  paddingBlock: "10px",
                  color: "white", }}>
                CATEGORIES
              </h3>
            </div>
            <div>
              <h4
                style={{
                  background: "#e2e8f0",
                  paddingLeft: "40px",
                  paddingTop: "10px",
                  paddingBlock: "10px",
                }}>
                APPLE
              </h4>
            </div>
            <div>
              {/* cac danh muc, khi an vao se tim nap cac product tuong ung */}
              <p
                onClick={handleALl}
                style={{ paddingLeft: "40px", cursor: "pointer" }}>
                All
              </p>

              <h4
                style={{
                  background: "#e2e8f0",
                  paddingLeft: "40px",
                  paddingTop: "10px",
                  paddingBlock: "10px",
                }}>
                IPHONE & MAC
              </h4>

              <div style={{ paddingLeft: "40px" }}>
                <p onClick={handleIphone}>IPhone</p>
                <p onClick={hanldeIpad}>IPad</p>
                <p onClick={handleMacbook}>Macbook</p>
              </div>
              <p
                style={{
                  paddingTop: "10px",
                  paddingBlock: "10px",
                  background: "#e2e8f0",
                  paddingLeft: "40px",
                }}>
                WIRELESS
              </p>
              <div style={{ paddingLeft: "40px" }}>
                <p onClick={handleAirpod}>AirPod</p>
                <p onClick={handleWatch}>Watch</p>
              </div>
              <p
                style={{
                  paddingLeft: "40px",
                  background: "#e2e8f0",
                  paddingTop: "10px",
                  paddingBlock: "10px",
                }}>
                OTHER
              </p>
              <div style={{ paddingLeft: "40px" }}>
                <p onClick={handleMouse}>Mouse</p>
                <p onClick={handleKey}>Keyboard</p>
                <p onClick={handleOTher}>Other</p>
              </div>
            </div>
          </div>
        </div>
        {/* phan search soft theo input */}
        <div className={classes.itemProduct}>
          <input
            onKeyUp={searchProducts}
            value={setinput}
            onChange={handleOnechangeInput}
            type="text"
            placeholder="Enter Search Here"
          />
        </div>
        <div className={classes.itemProduct}>
          <select>
            <option>Default sorting</option>
            <option>Sort By name</option>
          </select>
        </div>
        {/* kiem tra data va hien cac san pham */}
        {data &&
          (!!DataSearchProducts === false ? data : DataSearchProducts).map(
            (item, index) => (
              <div
                onClick={() => {
                  navigae("/detail", { replace: true });
                  dispatch(popupAction.itemDetail(item));
                }}
                key={index}
                className={` ${classes.slidein} ${classes.itemProduct} `}>
                <img src={item.img1} alt={item.category} />
                <div>
                  <h4 style={{ fontSize: "20px" }}>{item.name}</h4>
                  <p style={{ fontSize: "20px", color: "#777f87" }}>
                    {df.format(item.price)} VNĐ
                  </p>
                </div>
              </div>
            )
          )}
          {/* hien chi tiet san pham khi an vao */}
        { DataSearchProducts === null || DataSearchProducts.length === 0 && isdata === true && (
          <h1 className={classes.error}>Can't Found products</h1>
        )}
      </div>
    </div>
  );
}
export default ShopProducts;

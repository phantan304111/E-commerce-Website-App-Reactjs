import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { ActitonCartItem } from "../store";
import classes from "./detailProduct.module.scss";
import DecimalFormat, { RoundingMode } from "decimal-format";
const df = new DecimalFormat("#,##0");
df.setRoundingMode(RoundingMode.HALF_EVEN);
function DetailProduct() {
    //dung useSelector va  useDispatch de xu ly state va dispatch action tu redux store
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const itemDetail = useSelector((state) => state.popup.itemDetail);
  const isDetail = !!itemDetail;
// nut them vao gio hang, them so luong
  const handleRight = () => {
    dispatch(ActitonCartItem.addIncrement());
  };
  const handleAddToCart = ()=>{
         const arr ={
          id :itemDetail._id.$oid,
          img : itemDetail.img1,
          name  :itemDetail.name,
          quantity : quantity,
         total : totalPrice,
         price : itemDetail.price
         }
    dispatch(ActitonCartItem.addToCart(arr))
   }


  
  return (
    isDetail && (
      <div className={classes.wrapper}>
        <div className={`${classes.container} ${classes.itemProducts}`}>
          <div className={classes.itemDetail}>
            <img src={itemDetail.img2} alt={itemDetail.category} />
          </div>
          <div className={classes.itemDetail}>
            <img src={itemDetail.img1} alt={itemDetail.category} />
          </div>
          <div className={classes.itemDetail}>
            <img src={itemDetail.img2} alt={itemDetail.category} />
          </div>
          <div className={classes.itemDetail}>
            <img src={itemDetail.img3} alt={itemDetail.category} />
          </div>
          <div className={classes.itemDetail}>
            <img src={itemDetail.img4} alt={itemDetail.category} />
          </div>
        </div>
        <div style={{ textAlign: "left" }} className={classes.container}>
          <div style={{    paddingTop: '365px',
    paddingLeft: '90px'}}>
             <div style={{lineHeight: '30px'}}><p ><b>{itemDetail.name}</b></p></div>
            <p style={{color : '#94a3b8'}}> {df.format(itemDetail.price)} VND</p>
            <div
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "left",
                fontSize: "20px",
                color: "#777F87",
              }}>
              <p style={{whiteSpace: 'pre-line' ,color :'#94a3b8'}}>{itemDetail.short_desc}</p>
            </div>
            <h4>
              Category :{" "}
              <span style={{ fontWeight : '400', fontSize: "25px", color: "#94a3b8" }}>
                {itemDetail.category}
              </span>
            </h4>
            <div>
              <div style={{ display: "flex" }}>
                <input 
                  type="number"
                  value={quantity}
                 onChange={(e)=> dispatch(ActitonCartItem.addIncrement(e.target.value))}
                  style={{
                
                    paddingRight: "50px",
                    paddingLeft: "20px",
                    height: "45px",
                    fontSize: "20px",
                  }}
                />
                <div>
                  <button onClick={handleAddToCart}
                    style={{
                      height: "45px",
                      fontSize: "20px",
                      background: "black",
                      color: "white",
                    }}>
                    Add to Cart
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    top: "-18px",
                    left: " -250px",
                  }}>
                  <div style={{ paddingRight: "20px" ,    cursor : 'pointer'}}>
                    <p onClick={() => dispatch(ActitonCartItem.decrement(1))}>
                    
                      <FontAwesomeIcon icon={faChevronLeft} />{" "}
                    </p>
                  </div>
                  <div style={{ position: "relative ", top: "27px" }}>
                    <span>{quantity}</span>
                  </div>
                  <div onClick={handleRight} style={{ paddingLeft: "20px",    cursor : 'pointer' }}>
                    <p>
                    
                      <FontAwesomeIcon icon={faChevronRight} />{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.description}>
      <div><button style={{ 
                      height: "45px",
                      fontSize: "20px",
                      background: "black",
                      color: "white",
                    }}>DESCRIOPTION</button></div>
      <div><h3>PRODUCT DESCRIPTION</h3></div>
      <div style={{whiteSpace : 'pre-line',textAlign : 'left' ,fontSize : "20px"}}><p style={{color : '#94a3b8'}}>{itemDetail.long_desc}</p></div>

 <div style={{paddingTop : '100px'}}>
    <div><h3>RELATED PRODUCT</h3></div>
    <div className={classes.imgdescription}>  <div><img src={itemDetail.img2}/> 
    <h4>{itemDetail.name}</h4>
    <p style={{color : '#777F87'}}>{df.format(itemDetail.price)} VND</p>
    </div>
    <div><img src={itemDetail.img3}/> <h4>{itemDetail.name}</h4>
    <p style={{color : '#777F87'}}>{df.format(itemDetail.price)} VND</p></div>
    <div><img src={itemDetail.img4}/> <h4>{itemDetail.name}</h4>
    <p style={{color : '#777F87'}}>{df.format(itemDetail.price)} VND</p></div></div>
  
 </div>
        </div>
      </div>
    )
  );
}
export default DetailProduct;

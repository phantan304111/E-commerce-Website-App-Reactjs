import { Fragment } from "react";
import Footer from "../components/footer";
import CheckOut from "./checkOut";
//phan hoa don gom thanh phan checkout, footer
function CheckOutPage() {
  return (
    <Fragment>
     
    
        <CheckOut />
        <footer style={{paddingTop : '30px'}}>
      <Footer/>
   </footer>
    </Fragment>
  );
}
export default CheckOutPage;

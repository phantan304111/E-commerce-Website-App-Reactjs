import { Fragment } from "react"
import Footer from "../components/footer"
import Nav from "../components/Nav"
import CartProduct from "./cartProduct"
//trang gio hang, dung component CartProduct va Footer
function CartPage(){
return <Fragment>
  
    <CartProduct/>
    <footer style={{paddingTop : '30px'}}>
      <Footer/>
   </footer>
</Fragment>
}
export default CartPage
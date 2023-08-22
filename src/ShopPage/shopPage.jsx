import Footer from "../components/footer"
import ShopProducts from "./shopProducts"
//trang Shop voi duong dan /shop gom 2 thanh phan ShopProducts va Footer
function ShopPage(){
return (<div>
    <ShopProducts/>
    <footer >
      <Footer/>
   </footer>
</div>)
}
export default ShopPage
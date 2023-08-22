import { Fragment } from "react"
import Footer from "../components/footer"
import DetailProduct from "./detailProduct"
//Thong tin Chi tiet san pham
function DetailPage(){
return <Fragment>
    
        <DetailProduct/>
    <footer style={{paddingTop : '2%',position : 'relative'}}>
        <Footer/>
    </footer>
</Fragment>
}
export default DetailPage
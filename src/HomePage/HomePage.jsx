import { fa0 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fragment } from "react"
import Footer from "../components/footer"
import Banner from "./banner"
import ProductsList from "./ListProducts"

//tao trang homepage voi cac component Banner, Footer va ProductsList
function HomePage(){
return <Fragment>
<Banner/>
<ProductsList/>
<footer style={{position : 'relative' , top: '200px'}}>
<Footer/>
</footer>
</Fragment>

}
export default HomePage
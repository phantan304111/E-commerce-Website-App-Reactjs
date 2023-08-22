import { useNavigate } from "react-router-dom"
import classes from './banner.module.css'
const img = require('../images/banner1.jpg')
//thanh phan banner chua hinh banner va nut dan den /shop
function Banner (){
    const navigate = useNavigate()
    //ham dung hook navigate xu li nut dan den /shop
    const handleShopPage = ()=> {
      navigate('/shop',{replace : false})
    }
return(
    <div className={classes.container}>
 <div>
    <img  src={img} alt = 'banner'/>
 </div>
 {/* phan tieu de, quang cao va nut */}
 <div className={classes.title}>
 <p style={{paddingBottom : '15px',fontSize : '2.4rem',color : '#777F87'}}>NEW INSPIRATION 2020</p>
 <h2>"20% OFF ON NEW <br/> <br/> SEASON</h2>
<button onClick={handleShopPage}>Browse Collection</button>
 </div>
    </div>)
}
export default Banner
import { Fragment } from "react"
import Footer from "../components/footer"
import SignInUser from "./login"

//trang login, gom thanh phan footer dinh vi lai va thanh phan SignInUser
function SignUp(){
return <Fragment>
  
   <SignInUser/>
   <footer style={{position : 'relative',bottom: '529px'}}>
      <Footer/>
   </footer>
</Fragment>

}
export default SignUp;
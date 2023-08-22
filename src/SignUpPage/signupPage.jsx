import { Fragment } from "react"
import Footer from "../components/footer"
import SignupUser from "./signup"


function SignUpPage(){
return <Fragment>
  
      <SignupUser/>
    <footer style={{position : 'relative',    bottom: '489px'}}>
        <Footer/>
    </footer>
</Fragment>
}
export default SignUpPage;
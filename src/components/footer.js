import classes from  './footer.module.css'
function Footer(){
    //thanh phan footer, chua cac link gia
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>CUSTOMER SERVICES</h1>
                <a href='#'><p>Help & Contact us</p></a>
                <a href='#'> <p>Returns & Refunds</p></a>
                <a href='#'> <p> Online Stores</p></a>
                <a href='#'><p> Terms & Conditions</p></a>
            </div>
            <div className={classes.title}>
          <h1>COMPANY</h1>
            <a href='#'> <p>What We Do</p></a>
            <a href='#'> <p>Avaiable Services</p></a>
            <a href='#'> <p>Lastest Posts</p></a>
            <a href='#'>  <p>FAQs</p></a>

            </div>
            <div className={classes.title}>
          <h1>SOCIAL MEDIA</h1>
            <a href='#'>  <p>Twitter</p></a>
            <a href='#'>   <p>Telegram</p></a>
            <a href='#'>   <p>Facebook</p></a>
            <a href='#'>   <p> Pinterest</p></a>
            </div>
        </div>)
}
export default Footer
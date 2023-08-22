import { faDeleteLeft, faSquare, faSquareXmark, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { popupAction } from '../store';
import classes from './backdropSuccsess.module.css'
function ProductsSuccsesfully() {
    function BackDrop() {
      const dispatch = useDispatch();
    const navigate =useNavigate()
      return (
        <div className={classes.wraps}>
          <div className={classes.container}>      
          <div className={classes.popupcontent}>
        <div className={classes.imgbox}>
          <img src={require('../images/checked.png')} alt="" className={classes.img}/>
       </div>
        <div className={classes.title}>
          <h3>Success!</h3>
        </div>
        <p style={{paddingLeft:'80px'}}>Đã Đặt Hàng Thành Công</p>
        <div style={{color :'white',width :'50px',height:'40px', paddingLeft :'44%'}}>
        <button onClick={()=>{
            navigate('/home',{replace :false})
        dispatch(popupAction.successFully(false))
        } } style={{background : 'red',color :'white',width :'50px',height:'40px',} }>OK</button>
        </div>      
      </div>
          </div>
        </div>
      );
    }
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById("backdrop-root")
        )}
      </Fragment>
    );
  }
  export default ProductsSuccsesfully
    
  
import React from "react";
import { useState, useEffect } from "react";
// import data from "../api/db.json";
import styles from "./Product.module.css";
import TheFinerDetails from "./TheFinerDetails";
import AboutBrand from "./AboutBrand";
import ReturnsAndExchanges from "./ReturnsAndExchanges";
import Alert from '@mui/material/Alert';
import Popup from "./Popup";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// let data = JSON.parse(localStorage.getItem('selected_product'))
// console.log(data);
// console.log(typeof(data));
// console.log(item);
// console.log(typeof(item));




const Product2 = () => {
  // const [data, setData] = useState([]);
  // const {id}={useParams}

  // useEffect(() => {
  //   const getData = async () => {
  //     let res = await fetch(`http://localhost:8080/Face_Foundation_Cream/${id}`)
  //     let data = await res.json();
  //     setData(data);
  //     console.log(`http://localhost:8080/Face_Foundation_Cream/${id}`);
  //   };
  //   getData();
  // }, []);

  
const [open, setOpen] = React.useState(false);

const handleClose = () => {
  setOpen(false);
  window.location.reload();
};

  const [data,setData] =useState([])
  const {id} = useParams();
  console.log(id);
  var arr=[];
useEffect(() => {
   const getSingleData = async()=>{
      let res = await fetch(`https://saphora-nnow.herokuapp.com/Perfume/${id}`,{
          method:"GET",
          headers: {
              "contnet-type": "application/json",
            },
        });
        let data = await res.json();
        arr.push(data);
        setData(arr)
        console.log(arr);
   }
   getSingleData();
}, []);

  const [finerDetails, setFinerDatails] = useState(true);
  const [aboutBrand, setAboutBrand] = useState(false);
  const [returns, setReturns] = useState(false);

  const finerfunction = () => {
    setFinerDatails(true);
    setAboutBrand(false);
    setReturns(false);
  };

  const aboutfunction = () => {
    setFinerDatails(false);
    setAboutBrand(true);
    setReturns(false);
  };

  const returnsfunction = () => {
    setFinerDatails(false);
    setAboutBrand(false);
    setReturns(true);
  };

  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }

  const handleItem = async (product) => {

    // axios({
    //     method: 'DELETE',
    //     url: 'http://localhost:3001/click' 
    //   });

   let response2 = await fetch("https://saphora-nnow.herokuapp.com/click", {
    method: "POST",
   headers: { "content-type": "application/json" },
  body: JSON.stringify({
    "Qty":1,
    "id": product.id,
      "path": product.path,
      "cur": product.cur,
      "image1": product.image1,
      "image2": product.image3,
      "image3": product.image3,
      "brand": product.brand,
      "title": product.title,
      "price": product.price,
      "color": product.color,
      "size": product.size
}),
});
// let arr=[];
// arr.push(el);
//      localStorage.setItem('selected_product', JSON.stringify(arr));
    //  window.location.href="http://localhost:3002/productdetails";
    setOpen(true);
}

  return (
    <>
      {data.map((product) => {
        return (
          <div className={styles.main} key={product.id}>
            <div className={styles.left}>
              <div className={styles.path}>
                <div>{product.path}</div>
                <div>{product.cur}</div>
              </div>
              <div className={styles.images}>
                <div className={styles.imgleft}>
                  <button>
                    <img
                      src="https://www.visitjamaica.com/includes/public/assets/icons/svg/arrow-2.svg"
                      alt="visit"
                    />
                  </button>
                  <img src={product.image1} alt="img1" />
                  <img src={product.image2} alt="img2" />
                  <img src={product.image3} alt="img3" />
                  <button>
                    <img
                      src="https://www.visitjamaica.com/includes/public/assets/icons/svg/arrow-2.svg"
                      alt="visit"
                    />
                  </button>
                </div>
                <div className={styles.imgright}>
                  <button>
                    <img
                      src="https://www.visitjamaica.com/includes/public/assets/icons/svg/arrow-2.svg"
                      alt="visit"
                    />
                  </button>
                  <img src={product.image1} alt="img1" />
                  <button>
                    <img
                      src="https://www.visitjamaica.com/includes/public/assets/icons/svg/arrow-2.svg"
                      alt="visit"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* rightpart */}
            <div className={styles.right}>
              <div className={styles.title}>
                <h3>{product.brand}</h3>
                <p>{product.title}</p>
                <h3>Rs. {product.price}</h3>
              </div>
              <div className={styles.size}>
                <h3>SIZE:</h3>
                <div>{product.size}</div>
              </div>
              <div className={styles.important}>
                <img
                  src="data:image/png;base64,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"
                  alt="info"
                />
                <div>
                  <div>IMPORTANT</div>
                  <div>
                    All products that will be shipped will have a shelf-life
                    more than 8 months to 3 years.
                  </div>
                </div>
              </div>
              <div className={styles.color}>
                <div>COLOR: </div>
                <p> {product.color}</p>
              </div>
              <div className={styles.btn}>
                <button onClick={() => {handleItem(product);}}>ADD TO BAG</button>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <Alert severity="success">Your item added to the cart — check it out!</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
              </div>
              <div className={styles.sharediv}>
                <div>
                  <img
                    src="https://koronaturvallinenlappi.fi/wp-content/uploads/2020/09/Path-13.png"
                    alt="favourites"
                  />
                  <p>FAVORITE</p>
                </div>
                <div>
                  <img
                    src="https://www.megachips.co.jp/common/img/ico_share_open.svg"
                    alt="share"
                  />
                  <p>SHARE</p>
                </div>
              </div>
              <div className={styles.policy}>
                <img
                  src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png"
                  alt="non-returnable"
                />
                <div>
                  <h4>RETURN POLICY ON THIS ITEM</h4>
                  <p>This item is non-returnable.</p>
                </div>
              </div>
              <div>
                <img
                  src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg"
                  alt="pdp desktop"
                />
              </div>
              <div className={styles.pincode}>
                <h4>DELIVERY/STORE OPTIONS :</h4>
                <p>Enter your pincode to view delivery & store options</p>
                <div>
                  <input type="text" />
                  <button>CHECK</button>
                </div>
              </div>
            </div>
          </div>
        );
        
      })}
      
      <div className={styles.details}>
        <div className={styles.innerdiv}>
          <div>
            <button onClick={finerfunction}>THE FINER DETAILS</button>
            <button onClick={aboutfunction}>ABOUT BRAND</button>
            <button onClick={returnsfunction}>RETURNS & EXCHANGES</button>
          </div>
          <div>
            {finerDetails ? <TheFinerDetails /> : null}
            {aboutBrand ? <AboutBrand /> : null}
            {returns ? <ReturnsAndExchanges /> : null}
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Product2;


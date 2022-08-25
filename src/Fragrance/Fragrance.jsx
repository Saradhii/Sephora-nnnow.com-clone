import React from 'react';
import styles from "./fragrance.module.css";
import {useState , useEffect} from "react";
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Fragrance = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //       let res = await fetch(`http://localhost:8080/Perfume`)
    //       let data = await res.json();
    //       setData(data);
    //     //   console.log(data);
    //     };
    //     getData();
    //   }, []);

    const [data, setData] = useState([]);
    useEffect(() => {
      const getData = async () => {
        let res = await fetch(`https://saphora-nnow.herokuapp.com/Perfume`, {
          method: "GET",
          headers: {
            "contnet-type": "application/json",
          },
        });
        let data = await res.json();
        setData(data);
      };
      getData();
    }, []);
    


    const handleSort = (e) => {
        if(e.target.value=="asc")
        {
          setData((data) =>{
            const asc = [...data];
            asc.sort((a,b)=>Number(a.price) - Number(b.price));
            return asc;
          })
        }
    
        if(e.target.value=="desc")
        {
          setData((data) =>{
            const deac = [...data];
            deac.sort((a,b)=>Number(b.price) - Number(a.price));
            return deac;
          })
        }
      };

    //   const handleItem = async(el) => {
    //     axios.post('', {el}).then(resp => {
    //     console.log(resp.data);
    //     }).catch(error => {
    //     console.log(error);
    //     });
    //     console.log(typeof(el));
    //     console.log(el);
        // window.location.href="http://localhost:3000";
    //   };


        const handleItem = async (el) => {

            // axios({
            //     method: 'DELETE',
            //     url: 'http://localhost:3001/click' 
            //   });

           // let response2 = await fetch("http://localhost:3001/click", {
          //   method: "POST",
         //   headers: { "content-type": "application/json" },
        //   body: JSON.stringify({
       //     el
      //   }),
     // });
    //  let arr=[];
    //  arr.push(el);
    //          localStorage.setItem('selected_product', JSON.stringify(arr));
            //  window.location.href="http://localhost:3002/productdetails";
    }

  return (
<>
    <div className={styles.main1}>
      <div className={styles.side1}>
      {/* <ul>
         <label><input type="radio" name="muhRadio" value=""/> Help</label><br></br>
         <label><input type="radio" name="muhRadio" value=""/> Yep</label><br></br>
         <label><input type="radio" name="muhRadio" value=""/> Something</label><br></br>
         <label><input type="radio" name="muhRadio" value=""/> Farts</label><br></br>
     </ul> */}
     <h5><b>CATEGORY</b></h5>
     <ul>
     <lable><input type="radio" name="muhRadio" value=""/> Nail(49)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Lip Stick(46)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Eye Shadow(40)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Foundation(27)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Lip Stain(21)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Eye Liner(9)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Eye Brows(8)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Face Primer(8)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Mascara(7)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Face Brushes(6)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Eye Brushes(5)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Bronzer(4)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Blush(4)</lable><br></br><br></br>
     <lable><input type="radio" name="muhRadio" value=""/> Concealer(3)</lable><br></br>
     </ul>
     <h5><b>More</b></h5>
     <hr></hr>
     <ul>
     <lable><input type="radio" name="muhRadio" value=""/> On Sale(145)</lable><br></br>
     </ul>
     <hr></hr>
     <h5><b>FILTER BY</b></h5>
     <div className={styles.filterby}>
         <div><p>Brand</p> <p>→</p></div><br></br>
         <div><p>Size</p> <p>→</p></div><br></br>
         <div><p>Color</p> <p>→</p></div><br></br>
         <div><p>Promotion</p><p>→</p></div><br></br>
         <div><p>Price</p> <p>→</p></div><br></br>
         <div><p>Store</p> <p>→</p></div><br></br>
     </div>
      </div>
      <div className={styles.side2}>
        <div className={styles.sorting}>
            <div> <b>SORT</b> : &nbsp;
            <select data-testid="product-sort-order" onChange={handleSort}>
        <option>Popularity  </option>
        <option value="asc" name>Low to High</option>
        <option value="desc">High to Low</option>
             </select>&nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div className={styles.makeup1}>
        {
          data.map((el) => {
             return(
             <>         
                        <div className={styles.products}  key={el.id}>
                       {/* <NavLink to="/productdetail"> */}
                         <Link to={`/fragrance/${el.id}`}>
                          <div>
                          <img src={el.image1} alt={el.title} height = "200px" width={"200px"} /> 
                          <h5> <span className={styles.redc}><FaBookmark/>OFFER</span><br></br><b>{el.brand}<br></br><br></br></b>{el.cur}<br></br> {el.title}<br></br><br></br><b>Price: {el.price}</b></h5>
                          </div> 
                          </Link>
                       {/* </NavLink>   */}
                       </div>    
             </>
                   )
             })
       } 
        </div>
      </div>
    </div>
</>
  )
}

export default Fragrance
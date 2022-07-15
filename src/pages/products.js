import { useState, useEffect } from "react";
import Product from "../components/product/product";
import Nav from "../components/nav-bar/nav";
function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const changeUrl = str => {
    changeData(str);
  };

  const changeData=(str)=>{
    let url=`http://localhost:3000/api/v1/products`
    if(str!=null){
      url=`http://localhost:3000/api/v1/products?q=${str}`;
    }
    fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    setData(data);
  });
  }
  useEffect(() => {
    changeData()
   }, []);
   if(data==null){
    return(
      <h1>
        No data
      </h1>
    )
   }else{
    return (
      <div >
        <Nav className="mb-5" changeUrl={changeUrl}/>
        <br />
        <div className="m-5">
        {data.map((object, i) => <Product data={object}/>)}
        </div>

      </div>
     );
   }

}

export default Products;

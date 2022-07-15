import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import LineItem from "../components/line_items/lineItem";
function Carts(props) {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  console.log(id);
  const [data, setData] = useState(null);
  const [price, setPrice] = useState(null);
  const changeUrl = str => {
    changeData(str);
    changePrice();
  };
  const changeData=(str)=>{

    fetch("http://localhost:3000/api/v1/carts/"+id)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    setData(data);
  });
  }

  const checkout=(str)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: id }),
  };
  fetch('http://localhost:3000/api/v1/carts/checkout', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(null);
      });
  }
  const emptyCart=(str)=>{
    var proceed = window.confirm("Are you sure you want to proceed?");
      if (proceed) {
  //proceed
      } else {
        return;
    }
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: id }),
  };
  fetch('http://localhost:3000/api/v1/carts/destroy', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(null);
      });


  }
  const changePrice=(str)=>{
    fetch("http://localhost:3000/api/v1/carts/getPrice?id="+id)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    setPrice(data.price);
  });
  }

  useEffect(() => {
    changeData()
    changePrice()
   }, []);

   if(data==null){
    return(
      <div>
        <h1>
        No Items added to Cart

      </h1>
      <Link to="/">{'Keep Shopping'}</Link>
      </div>

    )
   }
  return (
    <div className="cart">
      <div class="keep-shopping pv1 mt4 has-text-right">
      <Link to="/">{'Keep Shopping'}</Link>
  </div>

  <section class="section">

  {data.map((object, i) => <LineItem key={i} data={object}  changeUrl={changeUrl}/>)}

<div class="columns">
  <div class="columns">
  <button className="button is-small mb4" onClick={event => emptyCart()}>Empty Cart</button>
    {/* <%= button_to 'Empty Cart', @cart, method: :delete, data: {confirm:"Are you sure? "}, class:"button is-danger"%> */}
  </div>

  <div class="column total has-text-right">
    <div class="title is-4">
    <h4>

      <span class="f5 m-3 has-text-grey">
      Total
      </span>
      {price}
      </h4>
    </div>
  </div>

</div>
<button className="button is-small mb4" onClick={event => checkout()}>Buy Now</button>
{/* <%= button_to "Buy Now", checkout_index_path, remote: true %> */}


</section>


    </div>
   );
}

export default Carts;

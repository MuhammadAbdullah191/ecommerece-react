import logo from '../../logo.svg';
import { Link,Navigate } from "react-router-dom";

function Imge(props){
  let image=props.Image
  if (image==null) {
    return <img src={logo} width="200" height="200" alt="Logo" />;
  }else{
    return <img src={image} width="200" height="200" alt="Logo" />;
  }
}
function Product(props) {
  let data=props.data.product
  let image=props.data.url
  let href=`http://localhost:3000/api/v1/products/shiftToRails?id=${data.id}`;
  // const shiftToRailsProduct= (id) =>{
  //   fetch(`http://localhost:3000/api/v1/products/shiftToRails?id=${id}`)
  // .then(function(response) {
  //   return response.json();
  // }).then(function(data) {
  //   console.log(data);
  //   // setData(data);
  // });
  // }

  return (
    <div className="border d-flex flex-row p-3 m-1">
      <Imge Image={image} />
      <div className="flex-column p-3 m-2 text-left"  style={{textAlign: 'left'}}>
        <h4 className='text-left'>
          {data.name}
        </h4>
        <p className="mt-1">
          {data.product_type}
        </p>

        <p className="mt-1 text-red text-left">
          {data.quantity}
        </p>

        <p className="mt-1 text-red text-left">
          {data.price}
        </p>
        {/* <Navigate to="google.com" /> */}
        <a href={href}  rel="noreferrer">
        <button className='btn btn-dark'>View</button>
    </a>


      </div>
    </div>
   );
}

export default Product;

import logo from '../../logo.svg';
function Imge(props){
  let image=props.Image
  if (image==null) {
    return <img src={logo} width="400" height="400" alt="Logo" />;
  }else{
    return <img src={image} width="400" height="400" alt="Logo" />;
  }
}

function LineItem(props) {
  var line_item=props.data;
  let image=props.data.url
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const changeItem=(signed)=>{
    if (signed=="0"){
      var proceed = window.confirm("Are you sure you want to proceed?");
      if (proceed) {
  //proceed
      } else {
        return;
    }
    }
    console.log(signed);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, pro_id: line_item.id, sign: signed })
  };
  fetch('http://localhost:3000/api/v1/carts/changeItem', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        props.changeUrl("a");
      });
  }
  return (
   <div className="LineItem m-3">
     <div class="columns align-items-center">
  <div class="column is-1">
  <div class="d-flex flex-row">
  <button disabled={(line_item.total==line_item.quantity)?(true):(false)} className="button is-warning add-to-cart" style={{width:'35px', height:'35px'}} onClick={event => changeItem('+')}>+</button>
  {/* <%= button_to '+' , line_items_path(product_id: line_item.product, actions: "+"), class: 'button is-warning add-to-cart'%> */}
  <div class="mx-3">
  {line_item.quantity}
  </div>
  {
    line_item.quantity==1?
    (<button  className="button is-warning add-to-cart" style={{width:'35px', height:'35px'}} onClick={event => changeItem('-')}>-</button>):
    <button  className="button is-warning add-to-cart" style={{width:'35px', height:'35px'}} onClick={event => changeItem('-')}>-</button>
  }
  {/* <%if line_item.quantity==1%>
    <%= button_to '- ', line_item, method: :delete, data: { confirm: "Are you sure? " }, class: "button is-small mb4" %>
  <%else%>
    <%= button_to '- ' , line_items_path(product_id: line_item.product, actions: "-"), class: 'button is-warning add-to-cart'%>
  <%end%> */}

  <div class="mx-5">
    <h3>
    Maximum Allowed
    </h3>
    <p>
      {line_item.total}
    </p>
  </div>
  </div>
    <div class="has-text-right">
    <button className="button is-small mb4" onClick={event => changeItem('0')}>Remove Item</button>
  {/* <%= link_to 'Remove Item', line_item, method: :delete, data: { confirm: "Are you sure? " }, class: "button is-small mb4" %> */}

</div>
  </div>
<div class="column is-2">
    <figure class="is-128x128 image">
    <Imge Image={image} />
    </figure>
  </div>
  <div class="column is-9">
    <strong>{line_item.name}</strong>
    <div class="columns align-items-center">
      <div class="column is-3 has-text-right">
        <strong class="f4">{parseInt(line_item.amount)*parseInt(line_item.quantity)}</strong>
      </div>
    </div>
  </div>
</div>
   </div>
   );
}

export default LineItem;

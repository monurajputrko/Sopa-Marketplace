import React, { useEffect, useState } from "react";
import './CartItem.css'
import Swal from "sweetalert2";


function CartItem({ item, removeFromCart, total }) {

    const [quantity, setQuantity] = useState(1);

    const handleChange = (val) => {
        setQuantity(pre => pre + val);
        let action;
        if (val === -1) {
            action = "subtract";
        }
        else {
            action = "add";
        }
        total(item.price, action);

    }

    return <div className="cart-item">
        <img src={item.image} alt="" />
        <p id="item-title" >{item.title}</p>
        <p id="item-price"> ₹ {item.price}</p>
        <div className="quantity-div">
            <button onClick={() => { handleChange(1) }}>+</button>
            {quantity}
            <button disabled={quantity == 0} onClick={() => { handleChange(-1) }}>-</button>
        </div>
        <p>Total : ₹ {item.price * quantity}</p>
        <button id="remove-btn" onClick={() => { 
        
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            removeFromCart(item.id)
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your Product has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })

        }}>Remove</button>
    </div >
}


export default CartItem;
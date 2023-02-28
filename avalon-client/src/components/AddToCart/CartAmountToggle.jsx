// import { Add, RemoveOutlined } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
        <RemoveIcon className='qtyIcon'/>
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <AddIcon className='qtyIcon'/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;

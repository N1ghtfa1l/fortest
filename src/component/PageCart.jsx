import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../slices/slicesCart";

const PageCart = ({ item }) => {
  const dispatch = useDispatch();

  const postDelete = () => {
    dispatch(removeCart(item.id));
  };

  return (
    <div className="cartBox">
      <img className="cartImg" src={item.url} alt="" />
      <div className="cartPageDesc">
        <div className="cartPageTitle">{item.name}</div>
        <div className="cartPageSubtitle">{item.gram} гр</div>
        <div className="cartPagePrice">{item.price} р</div>
        <button onClick={postDelete} className="cartPageDelete">Удалить</button>
      </div>
    </div>
  );
};

export default PageCart;

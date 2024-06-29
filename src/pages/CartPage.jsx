import { Link } from "react-router-dom";
import React from "react";
import "../css/CartPage/CartPage.css";
import { useSelector } from "react-redux";
import PageCart from "../component/PageCart";

const CartPage = () => {
  const item = useSelector((state) => state.slicesCart.item);
  const totalAmount = item.reduce((total, item) => total + item.price, 0);
  return (
    <div className="CartPage">
        <div className="cartPageInfo">
            <div className="cartPageInfoTitle">Товаров в корзине {item.length}</div>
            <div className="cartPageInfoPrice">Общая стоимость товаров: {totalAmount} </div>
        </div>
     <Link to="/"> <button className="cartPageBack">Назад</button></Link>
      {item.map((el) => (
        <PageCart key={el.id} item={el}/>
      ))}
    </div>
  );
};

export default CartPage;

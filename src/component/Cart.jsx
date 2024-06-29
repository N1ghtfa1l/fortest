import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../slices/slicesCart";
import Notification from "./Notification";

const Cart = ({ coffeDesc }) => {
  const [coffeIndex, setCoffeIndex] = useState(0);
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const item = useSelector((state) => state.slicesCart.item);

  function addPost() {
    const newItem = {
      id: coffeDesc.id,
      name: coffeDesc.title,
      url: coffeDesc.coffeUrl,
      price: coffeDesc.price,
      gram: coffeDesc.gram[coffeIndex],
    };
    const existingItem = item.find((item) => item.id === newItem.id);
    if (existingItem) {
      return;
    }
    dispatch(setCart(newItem));
    setShowNotification(true);
  }

  return (
    <div className="introInner">
      <div className="introInnerCart">
        <img className="cartImg" src={coffeDesc.coffeUrl} alt="" />
        <div className="coffeTitle">{coffeDesc.title}</div>
        <div className="coffeOptions">
          <div className="coffeTop">
            {coffeDesc.gram.map((el, i) => (
              <div
                onClick={() => setCoffeIndex(i)}
                key={el}
                className={
                  coffeIndex === i
                    ? "coffeTopButton  coffeTopButtonActive"
                    : "coffeTopButton"
                }
              >
                {el} гр
              </div>
            ))}
          </div>
          <div className="coffeBot">
            <button onClick={addPost} className="coffeBotButton">
              {" "}
              В корзину
            </button>
          </div>
        </div>
        <div className="coffePrice">{coffeDesc.price} р</div>
        {showNotification && (
          <Notification
            message={`Вы добавили ${coffeDesc.title} в корзину`}
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../slices/slicesFilter";
import { setColor } from "../slices/slicesColor";
import { Link } from "react-router-dom";

const Header = ({ tegMassive, setSelectSort, setQuery }) => {

  const categoryId = useSelector((state) => state.slicesFilter.categoryId);
  const list = useSelector((state) => state.slicesFilter.list);

  const dispatch = useDispatch();
  const [count, setCount] = useState(4);
  const [popup, setPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  function queryInfo(e) {
    setSearchQuery(e);
    setQuery(e);
  }
  function color(i) {
    setCount(i);
    dispatch(setColor(tegMassive[i]));
  }
  function selectPopup(i) {
    setSelectSort(list[i]);
    dispatch(setCategoryId(i));
    setPopup(!popup);
  }

  return (
    <header className="Header">
      <nav className="HeaderNav">
        <ul className="HeaderUl">
          {tegMassive.map((el, i) => (
            <li key={el}>
              <button
                onClick={() => color(i)}
                className={
                  count === i
                    ? "HeaderButton  HeaderButtonActive"
                    : "HeaderButton"
                }
              >
                {el}
              </button>
            </li>
          ))}
          <Link to="/CartPage">
            <button className="HeaderPage">Перейти в корзину</button>
          </Link>
        </ul>
      </nav>
      <div className="HeaderForm">
        <form>
          <input
            onChange={(e) => queryInfo(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Поиск..."
          />
        </form>
      </div>
      <div className="headerSelect">
        Сортировка по
        <button onClick={() => setPopup(!popup)} className="headerSelectButton">
          {list[categoryId]}
        </button>
        {popup && (
          <div className="sortPopup">
            <ul>
              {list.map((el, i) => (
                <li
                  value={el}
                  key={el}
                  onClick={() => selectPopup(i)}
                  className={categoryId === i ? "liActive" : ""}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

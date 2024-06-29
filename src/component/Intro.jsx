import React, { useMemo } from "react";
import Cart from "./Cart";
import coffeOne from "../img/coffeOne.png";
import coffeTwo from "../img/coffeTwo.png";
import coffeThree from "../img/coffeThree.png";
import coffeFour from "../img/coffeFour.png";
import { useSelector } from "react-redux";

const Intro = ({ select, query }) => {
  const selectColor = useSelector((state) => state.slicesColor.color);

  const coffeDesc = [
    {
      id: 2,
      title: "Африканский синий кофе",
      gram: [100, 200],
      price: 1200,
      coffeUrl: coffeTwo,
    },
    {
      id: 3,
      title: "Риорданский красный кофе",
      gram: [100, 300],
      price: 1700,
      coffeUrl: coffeThree,
    },
    {
      id: 1,
      title: "Австрийский желтый кофе",
      gram: [100, 200, 300],
      price: 700,
      coffeUrl: coffeOne,
    },
    {
      id: 6,
      title: "Эфиопский синий кофе",
      gram: [100, 200],
      price: 1000,
      coffeUrl: coffeTwo,
    },
    {
      id: 4,
      title: "Немецкий коричневый кофе",
      gram: [100],
      price: 2500,
      coffeUrl: coffeFour,
    },
    {
      id: 7,
      title: "Российский красный кофе",
      gram: [100, 300],
      price: 1800,
      coffeUrl: coffeThree,
    },
    {
      id: 5,
      title: "Украинский желтый кофе",
      gram: [100, 200, 300],
      price: 500,
      coffeUrl: coffeOne,
    },
    {
      id: 9,
      title: "Нидерландский красный кофе",
      gram: [100, 300],
      price: 1500,
      coffeUrl: coffeThree,
    },
    {
      id: 8,
      title: "Китайский желтый кофе",
      gram: [100, 200, 300],
      price: 500,
      coffeUrl: coffeOne,
    },
  ];

  const sortedCoffe = [...coffeDesc].sort((a, b) => {
    if (select === "Цене") {
      return a.price - b.price;
    } else if (select === "Алфавиту") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const filteredCoffe =
    selectColor && selectColor !== "Все"
      ? sortedCoffe.filter((el) =>
          el.title.toLowerCase().includes(selectColor.toLowerCase())
        )
      : sortedCoffe;
  const sortAndSearch = useMemo(() => {
    if (query) {
      return filteredCoffe.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return filteredCoffe;
  }, [query, filteredCoffe]);
  return (
    <div className="intro">
      {sortAndSearch.map((el) => (
        <Cart key={el.id} coffeDesc={el} />
      ))}
    </div>
  );
};

export default Intro;

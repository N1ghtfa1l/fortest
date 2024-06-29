import React from "react";
import Header from "../component/Header";
import Intro from "../component/Intro";
import { useState } from "react";

const Home = () => {
  const tegMassive = [
    "Желтый кофе",
    "Синий кофе",
    "Красный кофе",
    "Коричневый кофе",
    "Все",
  ];
  const [select, setSelectSort] = useState("Цене");
  const [query, setQuery] = useState("");

  return (
    <div>
      <Header
        tegMassive={tegMassive}
        setSelectSort={setSelectSort}
        setQuery={setQuery}
      />
      <Intro select={select} query={query} />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import IngredientsForm from "./IngredientsForm";
import IngredientsList from "./IngredientsList";
import Search from "./Search";

const Ingredients = () => {
  const [addItem, setAddItem] = useState([]);

  const addItemHandler = (ingredients) => {
    setAddItem((prevState) => [
      ...prevState,
      { id: Math.random().toString(), ...ingredients },
    ]);
  };
  const removeItem = (igid) => {
    setAddItem((prevState) => prevState.filter((item) => item.id !== igid));
  };

  return (
    <div>
      <IngredientsForm add={addItemHandler} />

      <section>
        <Search />
      </section>
      <section>
        <IngredientsList ingredient={addItem} removeTerm={removeItem} />
      </section>
    </div>
  );
};

export default Ingredients;

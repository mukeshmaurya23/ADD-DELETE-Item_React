import React, { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import styles from "./Search.module.css";
const Search = React.memo((props) => {
  const [filtered, setFiltered] = useState("");
  const inputRef = useRef();
  const { onSearch } = props;
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (filtered === inputRef.current.value) {
  //       const query =
  //         filtered.length === 0 ? "" : `orderBy="title"&equalTo="${filtered}"`;
  //       fetch(
  //         "https://react-http-b0a44-default-rtdb.firebaseio.com/ingredients.json" +
  //           query
  //       )
  //         .then((res) => res.json())
  //         .then((redData) => {
  //           const loadItem = [];
  //           for (const key in redData) {
  //             loadItem.push({
  //               id: key,
  //               title: redData[key].title,
  //               amount: redData[key].amount,
  //             });
  //           }
  //           onSearch(loadItem);
  //         });
  //     }
  //   }, 500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [filtered, onSearch, inputRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filtered === inputRef.current.value) {
        const query =
          filtered.length === 0 ? "" : `?orderBy="title"&equalTo="${filtered}"`;
        fetch(
          "https://react-http-b0a44-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = [];
            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            onSearch(loadedIngredients);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filtered, onSearch, inputRef]);
  return (
    <>
      <section className={styles.search}>
        <Card>
          <div className={styles["search-input"]}>
            <label>Filter by Title</label>
            <input
              type="text"
              ref={inputRef}
              onChange={(event) => setFiltered(event.target.value)}
            />
          </div>
        </Card>
      </section>
    </>
  );
});

export default Search;

import React from "react";
import Card from "../UI/Card";
import styles from "./Search.module.css";
const Search = React.memo(() => {
  return (
    <>
      <section className={styles.search}>
        <Card>
          <div className={styles["search-input"]}>
            <label>Filter by Title</label>
            <input type="text" />
          </div>
        </Card>
      </section>
    </>
  );
});

export default Search;

import React from "react";
import { useProductContext } from "../../Context/Products_context";

const Sort = () => {
  const { sort, updateSort } = useProductContext();
  return (
    <div>
      <form>
        <label htmlFor="sort">
          {" "}
          <b> Sort By </b>
        </label>
        <select
          name="sort"
          id="sort"
          className=""
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest"> price (lowest) </option>
          <option value="price-highest"> price (highest) </option>
        </select>
      </form>
    </div>
  );
};

export default Sort;

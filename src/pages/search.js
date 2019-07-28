import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Home } from "../pages";

const Search = () => {
  const [val, setVal] = useState("");

  return (
      <div>
      <input value={val} onChange={e => setVal(e.target.value)} />
      <Link to={`/home/${val}`}>
        검색하기
      </Link>
      </div>
  );
};
export default Search;

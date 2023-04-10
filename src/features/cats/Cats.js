import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList"

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div className="App">
      <h1>CatBook</h1>
      { status === "loading" &&
      <h1>Loading...</h1>}
      <CatList cats = {catPics}/>
    </div>
  );
}

export default Cats;
import { React, useEffect, useState } from "react";
import WashCard from "../components/WashCard";

function Basket({ user }) {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    fetch("/myLaundry", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((array) => setMyArray(array));
  }, []);

  return (
    <div className="closet">
      <h1>{user.username}'s LaUndry Basket</h1>
      <h3>What needs a wash?</h3>
      <hr />

      <div className="itemContainer">
        {myArray.map((item) => (
          <WashCard
            item={item}
            key={item.id}
            setMyArray={setMyArray}
            myArray={myArray}
          />
        ))}
        {myArray.length === 0 && <h3>Everything's clean....</h3>}
      </div>
    </div>
  );
}

export default Basket;

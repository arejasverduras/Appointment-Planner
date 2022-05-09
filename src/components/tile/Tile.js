import React from "react";

export const Tile = ({item}) => {

/* item : {
  name: name,
  phone: phone,
  email: email
}
*/

  const values = Object.values(item);
  // values = [name, phone, email]

  const slicedValues = values.slice(1);
  //slicedValues = [phone, email, ...]

  const listOfPs = slicedValues.map((value)=> 
    <p className="tile">{value}</p>
  )

  return (
    <div className="tile-container">
      <p className="tile-title">{values[0]}</p>
      {listOfPs}
    </div>
  );
};

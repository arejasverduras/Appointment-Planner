import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({input}) => {
  const listOfTiles = input.map((item) => 
    <Tile item={item} />
  )
  
  return (
    <div>
      {/* iteratively render Tile components form props.contacts
      using a map function */}
     {/* render as Ul */}
     <ul>{listOfTiles}</ul>
    </div>
  );
};

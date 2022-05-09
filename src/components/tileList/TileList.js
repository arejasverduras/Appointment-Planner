import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({input}) => {
  const listOfTiles = input.map((item) => 
    <Tile item={item} />
  )
  
  return (
    <div>
      <ul>{listOfTiles}</ul>
    </div>
  );
};

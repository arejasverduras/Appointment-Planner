import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({input}) => {
  
  return (
    <div>
{      input.map((item, index) => 
    <Tile item={item} key={index} />
  )}
    </div>
  );
};

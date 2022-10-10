import React, { ReactNode } from "react";
import customGridSchema from "../schemas/custom-grid-schema";
import CustomGridItemBig from "./CustomGridItemBig";
import CustomGridItemSmall from "./CustomGridItemSmall";

type Props = {
  gridType: number,
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({gridType = 1, children}: Props) => {
  console.log("Childrens:", children);
  return(
    <>
      <div>Custom Grid {gridType}</div>
      <CustomGridItemBig
        element = {children[0]}
      />
      <CustomGridItemSmall
        elementOne = {children[1]}
        elementTwo = {children[2]}
      />
      <CustomGridItemSmall
        elementOne = {children[3]}
        elementTwo = {children[4]}
      />
      {children}
    </>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid

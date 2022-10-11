import React, { ReactNode } from "react";
import customGridSchema from "../schemas/custom-grid-schema";
import CustomGridItemBig from "./CustomGridItemBig";
import CustomGridItemSmall from "./CustomGridItemSmall";
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'


type Props = {
  gridType: number,
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({gridType = 1, children}: Props) => {

  console.log(gridType);
  const gridTypeClass = `grid__${gridType}`

  const CSS_HANDLES = [gridTypeClass]
  const handles = useCssHandles(CSS_HANDLES)

  return(
    <div className={handles[gridTypeClass]}>
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
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid

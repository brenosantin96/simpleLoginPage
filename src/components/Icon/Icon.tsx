import React from 'react'
import { SVGPassword } from './SVGPassword'
import { SVGperson } from './SVGperson'

type Props = {
    svg: string;
    width: string;
    height: string;
    fillColor? : string;
    strokeColor? : string;
}

export const Icon = ({svg, width, height, fillColor, strokeColor} : Props) => {
  return (
    <div className='pr-3'>
        {svg === "key" && <SVGPassword height={height} width={width} />}
        {svg === "login" && <SVGperson height={height} width={width} />}
    </div>
  )
}

import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utilities/format'

export const CubicYards = () => {
  const { sections } = useContext(GlobalContext);

  const amounts = sections.map(Section => (Section.squareFeet * Section.InToFe) * .037);

  const total = amounts.reduce((acc, item) => (acc += item), 0);


  return (
    <div>
        <h4>Total Cubic Yards</h4>
        <h1>{numberWithCommas(Math.abs(total).toFixed(2))}</h1>
    </div>
  )
}

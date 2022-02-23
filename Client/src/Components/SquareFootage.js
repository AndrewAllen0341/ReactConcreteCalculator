import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utilities/format';

export const SquareFootage = () => {
    const { sections } = useContext(GlobalContext);

    const amounts = sections.map(Section => Section.squareFeet);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className="square-footage-container">
            <div>
                <h4>Total Square feet</h4>
                <p className="footage plus">{numberWithCommas(total)}</p>
            </div>
        </div>
    )
}
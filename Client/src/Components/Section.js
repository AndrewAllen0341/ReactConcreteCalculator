import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utilities/format'

export const Section = ( props ) => { 
  const { deleteSection } = useContext(GlobalContext);
  return (
        <li className='plus'>
          {props.section.text} <span>{numberWithCommas(Math.abs(props.section.squareFeet))} sq.ft</span><button className="delete-btn" onClick={() => deleteSection(props.section._id)}>x</button>
        </li>
  )
}

import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddSection = () => {
    const [text, setText] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');

    const { addSection } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

//squareFeet: length * width <= formula for square feet
//InToFe: depth / 12
//cubicFeet: squareFeet * InToFe
//Cubicyards: CubicFeet * .037

      const calcSection = {
        id: Math.floor(Math.random() * 100000000),
        text,
        squareFeet: length * width,
        InToFe: depth / 12
      }

      addSection(calcSection);



    }

  return (
    <div>
         <h3>Add new Section</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Section Type</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Driveway, sidewalk..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Dimensions <br /></label>
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="Enter Length in feet..." />
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Enter Width in feet..." />
          <input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} placeholder="Enter Depth in inches..." />
        </div>
        <button className="btn">Add Section</button>
      </form>
    </div>
  )
}

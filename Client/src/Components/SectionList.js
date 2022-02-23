import React, {useContext, useEffect} from 'react';
import { Section } from './Section';



import { GlobalContext } from '../context/GlobalState'


export const SectionList = () => {
  const { sections, getSection } = useContext(GlobalContext);

  useEffect(() => {
    getSection();
  }, []);

  return (
    <>
      <h3>Sections</h3>
      <ul className="list">
        {sections.map(section => (<Section key={section.id} section={section} />))}
      </ul>
    </>
  )
}

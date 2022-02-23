import React from 'react';
import { Header } from './Components/Header';
import { CubicYards } from './Components/CubicYards'
import { SquareFootage } from './Components/SquareFootage';
import { SectionList } from './Components/SectionList';
import { AddSection } from './Components/AddSection';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
       <CubicYards/>
       <SquareFootage/>
       <SectionList/>
       <AddSection/>
     </div>
    </GlobalProvider>
  );
}

export default App;


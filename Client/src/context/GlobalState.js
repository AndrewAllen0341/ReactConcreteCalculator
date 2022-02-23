import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import axios from 'axios';


//Initial state
const initialState = {
    sections: [
        //    { id: 1, text: 'Driveway', squareFeet: 600, InToFe: .4166666},
        //    { id: 2, text: 'Sidewalk', squareFeet: 300, InToFe: .5 },
        //    { id: 3, text: 'Slab', squareFeet: 100, InToFe: .583333 },
        //    { id: 4, text: 'Patio', squareFeet: 150, InToFe: .66666 }
         ],
         error: null,
         loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
async function getSection(){
    try{
        const res = await axios.get('/api/v1/section');
        
        dispatch({
            type: 'GET_SECTION',
            payload: res.data.data
        });
    }
    catch (err){
        dispatch({
        type: 'SECTION_ERROR',
        payload: err.response.data.error
    });
    }
}

async function deleteSection(id) {
    try {
        await axios.delete(`/api/v1/section/${id}`);
        dispatch({
            type: 'DELETE_SECTION',
            payload: id
        });
    }
    catch(err){
        dispatch({
            type: 'SECTION_ERROR',
            payload: err.response.data.error
         });
    }
}

async function addSection(section) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/v1/section', section, config);
        dispatch({
            type: 'ADD_SECTION',
            payload: res.data.data 
        });
    }
    catch (err){
        dispatch({
            type: 'SECTION_ERROR',
            payload: err.response.data.error
         });
    }
}



return (<GlobalContext.Provider value={{
    sections: state.sections,
    error: state.error,
    loading: state.loading,
    getSection,
    deleteSection,
    addSection

}}>
    {children}
</GlobalContext.Provider>);
}
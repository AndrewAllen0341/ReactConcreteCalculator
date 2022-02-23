export default (state, action) => {
    switch(action.type) {
        case 'GET_SECTION':
            return{
                ...state,
                loading: false,
                sections: action.payload
            }
        case 'DELETE_SECTION':
            return{
                ...state,
                sections: state.sections.filter(section => section._id !== action.payload)
            }
        case 'ADD_SECTION':
            return{
                ...state,
                sections: [...state.sections, action.payload]
            }
        case 'SECTION_ERROR':
            return{
                ...state,
                error: action.payload
            }
            
        default:
            return state;
    }
}
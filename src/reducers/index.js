const initialState = {
    items: [],
    sum: 0
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ITEMS_LOADED':   
            return {
                ...state,
                items: action.payload
            };
            
        case 'SUM_CHANGED':
            let sum = state.sum
            if(action.payload === 'clear') {
                return {
                    ...state,
                    sum: 0
                }
            } else {
                return {
                    ...state,
                    sum: sum += Number(action.payload)
                };
            }      
         default :
            return state
    }
}

export default reducer
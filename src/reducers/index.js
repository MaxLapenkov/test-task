const initialState = {
    items: [
        {id: 1, name: 'Orbit', price: 25, count: 25},
        {id: 2, name: 'Coca-cola', price: 50, count: 15},
        {id: 3, name: 'Snickers', price: 30, count: 35}
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ITEMS_LOADED':
            return {
                items: action.payload
            };
         default :
            return state
    }
}

export default reducer
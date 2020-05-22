const itemsLoaded = (newItems) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newItems
    };
};
const sumChanged = (newSum) => { 
    return {
        type: 'SUM_CHANGED',
        payload: newSum
    }
};
export {
    itemsLoaded,
    sumChanged,
};
import { ActionTypes } from "./Types";
export const ShopReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            console.log(`ShopReducer: DATA_LOAD ${action.payload.dataType}`);
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params
            };
        case ActionTypes.DATA_SET_PAGE_SIZE:
            return {
                ...storeData,
                pageSize: action.payload
            }
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {
                ...storeData,
                sortKey: action.payload
            }
        default:
            console.log(`ShopReducer: DEFAULT ${action.type}`);
            return storeData || {};
    }
}
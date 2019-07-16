import { ActionTypes, DataTypes } from "./Types";
export const ShopReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
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
        case ActionTypes.DATA_STORE:
            if(action.payload.dataType !== DataTypes.ORDERS){
                return storeData;
            }

            return {
                ...storeData,
                order: action.payload.data
            }
        default:
            console.log(`ShopReducer: DEFAULT ${action.type}`);
            return storeData || {};
    }
}
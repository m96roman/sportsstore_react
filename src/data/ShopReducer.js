import { ActionTypes } from "./Types";
export const ShopReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            console.log("ShopReducer: DATA_LOAD")
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        default:
            console.log("ShopReducer: DEFAULT")
            return storeData || {};
    }
}
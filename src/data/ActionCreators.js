import { ActionTypes, DataTypes } from "./Types";
import RestDataSource from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params)
        .then(reponse => ({
            dataType, 
            data: reponse.data,
            total: Number(reponse.headers["x-total-count"]),
            params
        }))
});

export const setPageSize = (newSize) => ({
    type: ActionTypes.DATA_SET_PAGE_SIZE,
    payload: newSize
});

export const setSortProperty = (newProp) => ({
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: newProp
});

export const placeOrder = (order) => ({
    type: ActionTypes.DATA_STORE,
    payload: dataSource.PostData(DataTypes.ORDERS, order)
        .then(response => ({dataType: DataTypes.ORDERS, data: response.data}))
})
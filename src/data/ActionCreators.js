import { ActionTypes } from "./Types";
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
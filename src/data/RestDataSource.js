import Axios from 'axios';
import RestUrls from './Urls';

export default class RestDataSource {
    GetData = (dataType, params) => 
        this.SendRequest("get", RestUrls[dataType], params);

    PostData = (dataType, data) =>  
        console.log(data) ||
        this.SendRequest("post", RestUrls[dataType], {}, data);

    SendRequest = (method, url, params, data) => 
        Axios.request({method, url, params, data});
}
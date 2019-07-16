import Axios from 'axios';
import RestUrls from './Urls';

export default class RestDataSource {
    GetData = (dataType, params) => 
        this.SendRequest("get", RestUrls[dataType], params);

    SendRequest = (method, url, params) => 
        Axios.request({method, url, params});
}
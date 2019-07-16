import {DataTypes} from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

const RestUrls = {
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`
}

export default RestUrls;

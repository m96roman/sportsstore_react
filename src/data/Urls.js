import {DataTypes} from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

const RestUrls = {
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
}

export default RestUrls;

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;

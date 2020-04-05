import { DataTypes } from "./Types";

// const basePath = `http://localhost:3500`;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `/api/products`,
  [DataTypes.CATEGORIES]: `/api/categories`,
  [DataTypes.ORDERS]: `/api/orders`,
};

export const GraphQlUrl = `/graphql`;
export const authUrl = `/login`;

export default RestUrls;
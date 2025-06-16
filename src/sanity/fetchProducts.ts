import { client } from "./lib/client";

export const fetchProducts = async () => {
    const query = `*[_type == "product"]{
    _id,
    productName,
    slug,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
  }`;
    const products = await client.fetch(query);
    return products;
  };
  
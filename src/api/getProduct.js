import axios from "axios";

const api = "https://dummyjson.com/products?limit=100";

const getProducts = async () => {
  try {
    const response = await axios.get(api);
    const products = response.data.products;
    window.products = products;
    return products;

  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default getProducts;
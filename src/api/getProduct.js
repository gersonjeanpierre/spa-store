const api = "https://dummyjson.com/products";

export const getProducts = async () => {

  try {
    const response = await fetch(api);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching data', error);
  }

}
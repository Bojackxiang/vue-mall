import axios from "axios";

export const getProduct = async id => {
  const response = await axios.get(`/api/products/${id}`);

  const { data } = response;
  console.log(data);
  return data;
};

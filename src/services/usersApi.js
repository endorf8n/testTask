import axios from "axios";

export const instance = axios.create({
  baseURL: "https://64c4bb7e67cfdca3b660ecd9.mockapi.io",
});

export const fetchUsers = async () => {
  const { data } = await instance.get("/users");
  return data;
};

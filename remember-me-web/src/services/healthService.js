import api from "./api";

export const checkHealth = async () => {
  const { data } = await api.get("/health");
  return data;
};
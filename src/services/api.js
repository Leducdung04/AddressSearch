import { API_URL, API_TOKEN } from "@env";

export const searchAddress = async (query) => {
  const limit = 10;
  const countryCode = "countryCode:VNM";
  const types = "address,city,street";

  try {
    const response = await fetch(
      `${API_URL}?q=${query}&limit=${limit}&in=${countryCode}&types=${types}&apiKey=${API_TOKEN}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log(`Error getting searchAddress data : ${error}`);
    return [];
  }
};

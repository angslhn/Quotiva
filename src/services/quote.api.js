import axios from "axios";

const getQuote = async (url, key) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": key,
      },
    });
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};

export default getQuote;
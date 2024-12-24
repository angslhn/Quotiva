import axios from "axios";

const getTranslate = async (text) => {
    try {
        const response = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`);
        return response.data.responseData.translatedText;
    } catch (error) {
        console.log(error);
    }
}

export default getTranslate;
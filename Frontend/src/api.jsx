import axios from "axios";

const API_BASE_URL = "https://sorting-visualizer-flask.onrender.com"; 

export const sortArray = async (algorithm, array) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/sort`, {
            algorithm,
            array,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
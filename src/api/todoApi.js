import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todos`;

export const getOne = async (no) => {
    const response = await axios.get(`${prefix}/${no}`);
    return response.data;
};

export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const response = await axios.get(prefix, {
        params: { page, size },
    });

    return response.data;
};

export const postAdd = async (todoObject) => {
    const response = await axios.post(prefix, todoObject);

    return response.data;
};
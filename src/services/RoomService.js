import { httpClient } from "../config/AxiosHelper";

export const createRoomApi = async(roomDetails) => {
  
    const response = await httpClient.post(`/api/v1/rooms`, roomDetails);
    return response.data;
};

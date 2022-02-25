import axios, { AxiosInstance } from "axios";


import IServerResponse from "../Services/Interface/IServerResponse";

export const Axios: AxiosInstance = axios.create();
const BASE_URL="http://localhost:8080/";
export const GetFetch = async (endpoint: string): Promise<IServerResponse> => {
  try {
    const serverResponse: IServerResponse = await Axios.get(BASE_URL+ endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });


    return serverResponse.data;
  } catch (error) {
    return {
      success: false,
      message: `Client error has occured. ${error}`,
    };
  }
};

export const PostFetch = async (
  endpoint: string,
  data: any
): Promise<IServerResponse> => {
  try {
    const serverResponse: IServerResponse = await Axios.post(BASE_URL + endpoint,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return serverResponse.data;
  } catch (error) {
    return {
      success: false,
      message: `Client error has occured. ${error}`,
    };
  }
};

export const FormDataPostFetch = async (
  endpoint: string,
  payload: any
): Promise<IServerResponse> => {
  try {
    const serverResponse: IServerResponse = await Axios.post(BASE_URL + endpoint,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return serverResponse.data;
  } catch (error) {
    return {
      success: false,
      message: `Client error has occured. ${error}`,
    };
  }
};

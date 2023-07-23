import { getWeatherData } from "@/api/api";
import { FETCH_ERROR, FETCH_SUCCESS } from "@/context/types/app.types";

export const fetchData = async (dispatch: any) => {
  try {
    const data = await getWeatherData();
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message,
    });
  }
};

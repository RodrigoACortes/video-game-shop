import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUserUpdate = () => async dispatch => {
  const res = await axios.get("/api/current_user_sub_credits");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken30 = token => async dispatch => {
  const res = await axios.post("/api/stripe_30", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};



import { API_BASE_URL, END_POINTS } from "../config/APIURI";
import ApiCall from "../middleware/ApiCall";

// Create New User
export const createNewUser = ({ userInfo }) => async dispatch => {
  const config = {
    url: API_BASE_URL + END_POINTS.USERS,
    header: {},
    body: userInfo
  };
  try {
    const createNewUserResponse = await ApiCall.postCall(config);
  } catch (error) {
    console.info('Error:', error);
  }
}

// SignIn User
export const login = ({ userInfo }) => async dispatch => {
  const config = {
    url: API_BASE_URL + END_POINTS.SIGNIN,
    header: {},
    body: userInfo
  };
  try {
    const loginResponse = await ApiCall.postCall(config);
    return loginResponse;
  } catch (error) {
    console.info('Error:', error);
  }
}

import { urls } from "../utils/constants/apiUrlConstants";
import axiosInstance from './apiInterceptor'; // Import axiosInstance directly

const { auth } = urls;

const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(auth.login, {
      email,
      password
    });

    return response;
  } catch (error) {
    // Handle error
    console.error("Login error:", error);
    throw error; // Re-throw the error if needed
  }
};

const AuthService = {
  login
};

export default AuthService;

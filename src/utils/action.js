import axios from "axios";

const BASE_URL = "http://localhost:3000";

// User Registration
export const userRegistration = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(`${BASE_URL}/api/user/register`, {
      name: "N/A",
      ...userData,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// User Login
export const userLogin = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/login`, userData);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// User Logout
export const userLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/logout`);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// book ticket
export const bookTicket = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/book-ticket`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

//get ticket from db
export const getTickets = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/ticket/get-tickets`,
      userId
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

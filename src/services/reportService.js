import axios from "axios";

const API_URL = "https://expense-tracker-backend-feep.onrender.com";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getMonthlyReport = async (month) => {
  const response = await axios.get(
    `${API_URL}/monthly?month=${month}`,
    getAuthConfig()
  );

  return response.data;
};
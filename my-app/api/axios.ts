import axios from "axios";

const api = axios.create({
	baseURL: "https://api-gateway-3344.onrender.com/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;

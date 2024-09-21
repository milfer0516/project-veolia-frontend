import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const googleAuth = async (code) => await api.get(`/google?code=${code}`);


/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	//const navigate = useNavigate();

	 useEffect(() => {
			const dataUser = localStorage.getItem("user-info");
			const parsedUser = JSON.parse(dataUser);
			if (parsedUser && parsedUser.token) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

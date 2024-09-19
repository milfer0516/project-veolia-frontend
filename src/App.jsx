import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import DashBoard from "./components/DashBoard";
import PageNotFound from "./components/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
//import Home from "./components/Home";

function App() {

	const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
	// Configuración del proveedor de autenticación Google
	const GoogleOAuthWrapper = () => {
		return (
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
				<LoginButton></LoginButton>
			</GoogleOAuthProvider>
		);
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<GoogleOAuthWrapper />} />
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/dashboard" element={<DashBoard />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

/* eslint-disable no-unused-vars */
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { googleAuth } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginButton = () => {
	const navigate = useNavigate();

	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				//
				// Aquí debes enviar el código de autorización para obtener el token
				const response = await googleAuth(authResult["code"]);
				//console.log("Response before: ", response);
				const { email, name, picture } = response.data.user;
				const token = response.data.token;
				const infoUser = { email, name, picture, token };
				// Guardar el token y datos del usuario en localStorage
				localStorage.setItem("user-info", JSON.stringify(infoUser));
				//console.log("Response after: ", response.data.user);

				navigate("/dashboard");
				//window.location.href = "/home"; // Redirigir a la página de inicio
			}
		} catch (error) {
			console.log("Error: ", error);
			console.error("Error mientras solito el código a Google: ", error);
		}
	};
	const handleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<>
			<div className="flex justify-center  w-full mx-auto space-y-8 p-10 bg-white">
				<button
					onClick={handleLogin}
					className="border border-transparent text-slate-900 py-2 px-4 bg-red-200 hover:bg-transparent hover:text-slate-500 transition text-lg font-semibold rounded-lg flex"
				>
					<FcGoogle size={32} className="mr-2" />
					Inicia con Google
				</button>
			</div>
		</>
	);
};

export default LoginButton;

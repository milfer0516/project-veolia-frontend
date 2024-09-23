import { Link } from "react-router-dom";

const LoginView = () => {
	return (
		<>
			<div className="flex justify-center flex-col">
				<h1 className="mx-auto text-2xl font-semibold text-center mt-6">
					Inicia Sesión en{" "}
					<span className="text-sky-900 text-2xl font-bold">Veolia</span>
				</h1>
				<form
					className="max-w-full w-full mx-auto space-y-8 p-10 bg-white sm:w-2/5"
					noValidate
				>
					<div className="flex flex-col gap-5">
						<label className="font-normal text-2xl">Email</label>

						<input
							id="email"
							type="email"
							placeholder="Email de Registro"
							className="w-full p-3  border-gray-300 border"
						/>
					</div>

					<div className="flex flex-col gap-5">
						<label className="font-normal text-2xl">Password</label>

						<input
							type="password"
							placeholder="Password de Registro"
							className="w-full p-3  border-gray-300 border"
						/>
					</div>

					<input
						type="submit"
						value="Iniciar Sesión"
						className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
					/>
				</form>
				<nav className="mt-4 flex flex-col space-y-4 text-white">
					<Link
						to={"/register"}
						className="text-center text-gray-800 font-normal"
					>
						No tienes Cuenta ? Crea una
					</Link>
				</nav>
			</div>
		</>
	);
};

export default LoginView;

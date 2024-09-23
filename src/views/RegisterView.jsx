import { Link } from "react-router-dom";

const RegisterView = () => {
	return (
		<>
			<h1 className="text-4xl font-black text-gray-500 text-center">
				Crear Cuenta
			</h1>
			<p className="text-2xl font-light text-gray-500 mt-5 text-center">
				Llena el formulario para {""}
				<span className=" text-fuchsia-500 font-bold"> crear tu cuenta</span>
			</p>

			<form
				className="max-w-full w-full mx-auto space-y-8 p-10 bg-white sm:w-2/5"
				noValidate
			>
				<div className="flex flex-col gap-5">
					<label className="font-normal text-2xl" htmlFor="email">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email de Registro"
						className="w-full p-3  border-gray-300 border"
					/>
				</div>

				<div className="flex flex-col gap-5">
					<label className="font-normal text-2xl">Nombre</label>
					<input
						type="name"
						placeholder="Nombre de Registro"
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

				<div className="flex flex-col gap-5">
					<label className="font-normal text-2xl">Repetir Password</label>

					<input
						id="password_confirmation"
						type="password"
						placeholder="Repite Password de Registro"
						className="w-full p-3  border-gray-300 border"
					/>
				</div>

				<input
					type="submit"
					value="Registrarme"
					className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
				/>
			</form>
			<nav className="mt-10 flex flex-col space-y-4 text-white">
				<Link to={"/login"} className="text-center text-slate-800 font-normal">
					Ya tienes Cuenta ? Inicia Sesión
				</Link>
			</nav>
		</>
	);
};

export default RegisterView;

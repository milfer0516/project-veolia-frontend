import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        if(data) {
            setUserInfo(JSON.parse(data));
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user-info');
        navigate('/login');
    }
  return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1>Bienvenido {userInfo?.name}</h1>
			<h3>Email: {userInfo?.email}</h3>
			<img src={userInfo?.picture} alt={userInfo?.email} />

			<button
				className="mt-8 border border-gray-700 text-slate-900 py-4 px-6 rounded bg-transparent hover:bg-blue-500 hover:text-white transition text-lg font-semibold"
				onClick={handleLogout}
			>
				Cerrar Sesión
			</button>
		</div>
	);
}

export default DashBoard

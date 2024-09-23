import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CardContainer from "./CardsInfoProjects";
import Navbar from "./Navbar";

const DashBoard = () => {
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		const data = localStorage.getItem("user-info");
		//console.log(data);
		if (data) {
			setUserInfo(JSON.parse(data));
		}
	}, []);

	return (
		<div>
			<Navbar userInfo={userInfo} />
			<div className="">
				<section className="flex justify-between lg:justify-around mt-4 ">
					<h1 className="ml-3 text-2xl font-bold">
						Bienvenido <span className="text-sky-800">{userInfo?.name}</span>
					</h1>
				</section>
				<section>
					<h2 className="text-2xl font-bold mt-4 mb-2">Proyectos</h2>
					<CardContainer />
				</section>

				<Outlet />
			</div>
		</div>
	);
};

export default DashBoard

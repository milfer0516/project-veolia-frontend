import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CardsInfoProjects({ title, content, link }) {
	// Add link prop
	return (
		//Centrar la tarjeta en la pantalla

		// Darle un diseño responsive para que se adapte a diferentes tamaños de pantalla
		<div className="flex items-center justify-center">
			<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
						{content}
					</p>
					<Link to={link}>
						{" "}
						{/* Use link prop here */}
						<button
							className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-gray-500 text-white font-semibold disabled:bg-gray-30
							uppercase"
						>
							Project {title} {/* Use title prop here */}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

function CardContainer() {
	/* Cada tarjeta tenga un link con su ruta */

	const cardsData = [
		{
			title: "EMPRESA-LACTEA",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, nunc vel scelerisque feugiat, metus velit volutpat tellus, vel eleifend neque nunc vel nunc. Sed vestibulum, ligula id eleifend consectetur, justo purus maximus tortor, vitae tincidunt ipsum nunc vel nunc.",
			/* Añadir link aquí */
			link: "/dashboard/home",
		},
		{
			title: "HINTER-CAR",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, nunc vel scelerisque feugiat, metus velit volutpat tellus, vel eleifend neque nunc vel nunc. Sed vestibulum, ligula id eleifend consectetur, justo purus maximus tortor, vitae tincidunt ipsum nunc vel nunc.",
			/* Añadir link aquí */
			link: "/dashboard/profile",
		},
	];
	/* Añadir más tarjetas según sea necesario */

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{cardsData.map((card, index) => (
				<CardsInfoProjects
					key={index}
					title={card.title}
					content={card.content}
					/* Añadir link aquí */
					link={card.link}
				/>
			))}
		</div>
	);
}

export default CardContainer;

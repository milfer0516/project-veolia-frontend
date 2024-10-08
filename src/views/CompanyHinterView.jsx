/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const tag = import.meta.env.VITE_TAG_PTAR_HINTER_CAR;
	const URL_QUERY_DB = import.meta.env.VITE_URL_QUERY_DB;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${URL_QUERY_DB}/api/
					getFileData`,
					{
						params: {
							tag,
							page: currentPage,
							limit: 15, // Cantidad de items por página
						},
					}
				);

				//console.log(response.data.limit);
				setData(response.data.data);
				setCurrentPage(response.data.currentPage);
				setTotalPages(response.data.totalPages);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);
	// Función para cambiar de página
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	// Función para buscar por ID

	return (
		<div className="p-4">
			<div className="flex justify-between">
				<h1 className="text-2xl font-semibold mb-4">Datos del Proyecto</h1>
				<h3>Pagina {currentPage}</h3>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-gray-200 rounded-lg">
					<thead className="bg-gray-100 border-b">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Tag
							</th>

							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Moment
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								State
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Value
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{data.map((item, index) => (
							<tr key={index} className="hover:bg-gray-100">
								<td
									onChange={handlePageChange}
									className="px-6 py-4 whitespace-nowrap   
 									text-sm font-medium text-gray-900"
								>
									{index + 1}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{item.tag}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{new Date(item.Moment).toLocaleString()}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{item.State}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{item.Value}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Paginación */}
			<div className="mt-4 flex justify-center space-x-2">
				{/* Botón Anterior */}
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-sky-700 text-white font-semibold disabled:bg-gray-300"
				>
					Anterior
				</button>

				{/* Botón Siguiente */}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-500 text-white font-semibold disabled:bg-gray-300"
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default Profile;

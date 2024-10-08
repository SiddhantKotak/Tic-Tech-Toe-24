import axios from "axios";
import { useEffect, useState } from "react";

export const useViewFile = ({ file_id }) => {
	const BACKEND_URL = import.meta.env.VITE_DATABASE_URL;

	const [loading, setLoading] = useState(true);
	const [file, setFile] = useState({});

	async function sendRequest() {
		setLoading(true);
		try {
			const res = await axios.get(
				`${BACKEND_URL}/api/v1/file/getFile/${file_id}`,
				{
					headers: {
						Authorization: `${localStorage.getItem("token")}`,
					},
				}
			);
			if (res.status === 200) {
				setLoading(false);
				setFile(res.data.file);
			} else {
				alert("Error while fetching doubt");
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		sendRequest();
	}, []);

	return {
		file,
		loading,
	};
};

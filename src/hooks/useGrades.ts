import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://static.healthforcego.com/grades.json';

type Grades = string;

const useGrades = () => {
	const [response, setResponse] = useState<Grades[]>([]);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(true);

	const fetchData = () => {
		axios
			.get(baseURL)
			.then((res) => {
				setResponse(res.data.grades);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setloading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { response, error, loading };
};

export default useGrades;

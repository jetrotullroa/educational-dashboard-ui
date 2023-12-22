export const load = (async () => {

	const getTeachers = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/teachers`)
			const data = await res.json()
			return data
	}


	return {
			teachers: await getTeachers(),
	}
}) 

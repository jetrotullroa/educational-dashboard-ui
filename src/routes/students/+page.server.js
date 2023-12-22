export const load = (async () => {

	const getStudents = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/students`)
			const data = await res.json()
			return data
	}


	return {
			students: await getStudents(),
	}
}) 

export const load = (async ({params}) => {
	const getStudentProgress = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/student_progress/${params.slug}`)
			const data = await res.json()

			return data
	}


	return {
			studentProgress: await getStudentProgress(),
	}
}) 

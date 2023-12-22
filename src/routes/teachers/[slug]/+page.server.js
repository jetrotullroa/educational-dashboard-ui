export const load = (async ({params}) => {
	const getTeacherActivities = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/teacher_activities/${params.slug}`)
			const data = await res.json()

			return data
	}


	return {
			teacherActivities: await getTeacherActivities(),
	}
}) 

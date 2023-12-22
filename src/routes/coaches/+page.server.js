export const load = (async () => {

	const getCoaches = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/coaches`)
			const data = await res.json()
			return data
	}


	return {
			coaches: await getCoaches(),
	}
}) 

export const load = (async () => {

	const getResourceManagement = async () => {
			const res = await fetch(`http://localhost:8000/api/v1/resource_managements`)
			const data = await res.json()
			return data
	}


	return {
			resourceManagements: await getResourceManagement(),
	}
}) 

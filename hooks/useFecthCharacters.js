import React, { useState, useEffect } from 'react'

const useApi = (API) => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState()

	useEffect(() => {
		setLoading(true);
		fetch(API)
			.then(response => response.json())
			.then(json => {
				setData(json)
				setLoading(false)
			})
			.catch (()=>{
				setLoading(false);
			})

	}, [API])
	return { loading, data };
}

export default useApi;
export const getAllCharacters = async (page) => {
	const url = `https://dragonball-api.com/api/characters?page=${page}&limit=10`;

	try {
		const data = await fetch(url);
		const response = await data.json();

		if (response.error) {
			return response;
		}

    return response.items;
	} catch (error) {
		console.error("Fetch Error", error);
	}
};

export const getCharacter = async (id) => {
  const url = `https://dragonball-api.com/api/characters/${id}`;

	try {
		const data = await fetch(url);
		const response = await data.json();

		if (response.error) {
			return response;
		}

    return response;
	} catch (error) {
		console.error("Fetch Error", error);
	}
};

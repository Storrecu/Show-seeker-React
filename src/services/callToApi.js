const callToApi = async () => {
  try {
    const url = 'https://api.tvmaze.com/search/shows?q=love';
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error calling API: ${res.statusText}`);
    }
    const data = await res.json();
    const result = data.map((item) => ({
      id: item.show.id,
      image: item.show.image
        ? item.show.image.medium
        : '//via.placeholder.com/210x295/ffffff/666666/?text=TV',
      title: item.show.name,
    }));

    return result;
  } catch (error) {
    console.log('Error al llamar a la API:', error);
    throw error;
  }
};

export default callToApi;

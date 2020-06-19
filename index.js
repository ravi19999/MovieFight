const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd19d1f9b',
            s: "avengers"
        }
    });

    console.log(response.data);
};

fetchData();
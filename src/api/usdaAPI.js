const token = "jTo6QiF6HsRw2nG0SbvPtwTK8e7sA8ZzoiEmisUN";
const baseUrl = 'https://api.nal.usda.gov/fdc/v1//foods/';

async function foodQuery(food, results = 10, resource = 'search?query=') {
    let url =
    baseUrl + resource + food + '&pageSize=' + results + '&api_key=' + token;
    try {
    let response = await fetch(url);
        return await response.json();
  } catch (e) {
        console.error(e);
        return { error: e };
    }
}

export default foodQuery;

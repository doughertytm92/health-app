// const usdaKey = "jTo6QiF6HsRw2nG0SbvPtwTK8e7sA8ZzoiEmisUN";
// const usdaBaseURL = "https://api.nal.usda.gov/fdc/v1/foods/";
// const food = "quinoa";

async function getFoodData(food = "quinoa") {
  let url =
    "https://api.nal.usda.gov/fdc/v1//foods/search?query=" +
    food +
    "&pageSize=1&api_key=jTo6QiF6HsRw2nG0SbvPtwTK8e7sA8ZzoiEmisUN";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
}

export default getFoodData;
const form = document.querySelector("#getPicturs");
const url = "https://fakestoreapi.com/products";
async function getApiData(url) {
  try {
    const apiData = await axios.get(url);
    console.log(apiData.data);
    makeImages(apiData.data);
    return apiData;
  } catch (error) {
    console.error(error);
  }
}
const mainContent = document.querySelector("#picturs");
form.addEventListener("click", getApiData(url));

// const searchTerm = form.elements.query.value;
// console.log(searchTerm);
// const config = { params: { q: searchTerm } };
// const res = await axios.get("https://fakestoreapi.com/products");
// console.log(res);
//makeImages(res.data);
// form.elements.query.value = "";
//});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.image) {
      const products = document.createElement("div");
      const img = document.createElement("IMG");
      const Figcaption = document.createElement("P");
      products.className = "productItem";
      Figcaption.textContent = `${result.title}`;
      Figcaption.style.fontSize = "12px";
      //Figcaption.style.flexWrap = "wrap";
      img.src = result.image;
      img.className = "Images";
      //img.style.boxSizing = "100 px";
      products.append(img, Figcaption);
      mainContent.append(products);
    }
  }
};

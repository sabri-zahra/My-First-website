const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", showe);
closeMenu.addEventListener("click", close);

function showe() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-150%";
}

// async function getApiData(url) {
//   try {
//     const apiData = await axios.get(url);
//     return apiData;
//   } catch (error) {
//     console.error(error);
//   }
// }
// getApiData("https://api.tvmaze.com/shows/82/episodes").then((data) => {
//   console.log(data);
// });
// const test = document.querySelector(".sec-content");
// test.style.backgroundImage = "url('./images/web.jpg')";

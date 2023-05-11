//const { createElement } = require("react");
const form = document.querySelector("form");
const userName = document.querySelector("#Username");
//console.log(userName);
const passWord = document.querySelector("#Password");
const Email = document.querySelector("#Email");
const submitForm = document.querySelector("#submit");
form.addEventListener(
  "submit",
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: `${userName}`,
      body: `${passWord}`,
      userId: `${Email}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
);
// { UserName: "", passWord: "", Email: "" }
submitForm.addEventListener("click", (e) => {
  // e.preventDefault();
  // const Name = userName.elements.value;
  console.log(e);
  const print = document.createElement("h2");
  print.textContent = "ثبت نام شما با موفقیت انجام شد";
  document.body.append(print);
});

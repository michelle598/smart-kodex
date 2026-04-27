const btn = document.getElementById("loadBtn");
const usersDiv = document.getElementById("users");

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      usersDiv.innerHTML = "";

      data.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("user");

        div.innerHTML = `
          <h3>${user.name}</h3>
          <p>${user.email}</p>
          <p>${user.address.city}</p>
        `;

        usersDiv.appendChild(div);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

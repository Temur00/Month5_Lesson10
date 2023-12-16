const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
        <h2>Name: ${user.name}</h2>
        <h2>Id: ${user.id}</h2>
        <p>Email: ${user.email}</p>
        <a href="/pages/todos.html" onclick="getTodos(${user.id})">Todos</a>
      </div>
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}

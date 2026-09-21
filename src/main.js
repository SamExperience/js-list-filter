import "./style.css";
import { users } from "./data/data.js";

document.querySelector("#app").innerHTML = `
<div class="container">
<h1>User List</h1>

<input type="text" id="searchInput" placeholder="Search users...">

<section>
<h2>All Users</h2>
<div id="allUsers"></div>
</section>

<section>
<h2>Admins</h2>
<div id="admins"></div>
</section>
</div>
`;

const contUsers = document.querySelector("#allUsers");
const contAdmins = document.querySelector("#admins");
const searchIn = document.querySelector("#searchInput");

const admins = users.filter((user) => user.isAdmin);

function renderUsers(listUsers, container) {
  if (!listUsers || listUsers.length === 0) {
    container.textContent = "No users found";
    return;
  }
  container.innerHTML = "";
  listUsers.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - isAdmin: ${user.isAdmin}`;
    container.appendChild(li);
  });
}

renderUsers(users, contUsers);
renderUsers(admins, contAdmins);

searchIn.addEventListener("input", (event) => {
  const search = event.target.value.trim().toLowerCase();

  const usersFilter = users.filter((user) =>
    user.name.toLowerCase().includes(search),
  );
  renderUsers(usersFilter, contUsers);

  const adminsFilter = admins.filter((user) =>
    user.name.toLowerCase().includes(search),
  );
  renderUsers(adminsFilter, contAdmins);
});

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

users.forEach((user) => {
  const li = document.createElement("li");
  li.textContent = `${user.name} - isAdmin: ${user.isAdmin}`;
  contUsers.appendChild(li);
});

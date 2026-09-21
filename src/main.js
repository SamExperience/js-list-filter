import "./style.css";
import { users } from "./data/data.js";

// Initialize DOM structure with HTML markup
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

/** @type {HTMLElement} Container element for rendering all users */
const contUsers = document.querySelector("#allUsers");

/** @type {HTMLElement} Container element for rendering admin users */
const contAdmins = document.querySelector("#admins");

/** @type {HTMLInputElement} Search input field element */
const searchIn = document.querySelector("#searchInput");

/** @type {Array<Object>} Filtered array containing only users with admin privileges */
const admins = users.filter((user) => user.isAdmin);

/**
 * Renders a list of users to the specified DOM container.
 * Displays a "No users found" message if the list is empty.
 *
 * @param {Array<{id: number, name: string, isAdmin: boolean}>} listUsers - Array of user objects to render
 * @param {HTMLElement} container - DOM element where users will be rendered
 * @returns {void}
 */
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

// Initial render of all users and admins
renderUsers(users, contUsers);
renderUsers(admins, contAdmins);

/**
 * Event listener for search input that filters users in real-time.
 * Updates both the all users and admins containers based on the search query.
 */
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

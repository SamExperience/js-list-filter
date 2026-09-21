import "./style.css";

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

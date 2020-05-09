<template>
  <nav class="navbar navbar-expand-lg">
    <ul class="navbar-nav">
      <li class="nav-item mr-3">
        <router-link to="/" tag="li" active-class="active" exact>
          <a>Home</a>
        </router-link>
      </li>
      <li class="nav-item mr-3">
        <router-link to="/user" tag="li" active-class="active">
          <a>User</a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
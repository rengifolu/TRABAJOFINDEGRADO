<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <b-navbar toggleable="md" type="dark" variant="info" disableAutohide="true">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">RR-HH</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
         <b-nav-item to="/" exact>Home</b-nav-item>
         <b-nav-item to="/Presentacion" exact>Presentacion</b-nav-item>
          <b-nav-item to="/AboutUs" exact>About Us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

<!--           <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item to="/Login">Profile</b-dropdown-item>
            <b-dropdown-item to="/Signout">Signout</b-dropdown-item>
            
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

<!-- navbar-1.vue -->


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}

</style>

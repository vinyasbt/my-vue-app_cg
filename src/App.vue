<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
   <!-- <ListComponent /> -->
   <!-- <Login /> -->
   <!-- <shoppingcart /> -->
   <!-- <todo /> -->
   <!-- <productcategory /> -->
   <!-- <stateandcity /> -->
   <productlist />
   <numbersubmit />
   <numberdisplay />
   <crud />
  </div>
</template>

<script>

// import ListComponent from "./ListComponent.vue";
// import Login from "./Login.vue"
// import shoppingcart from './shoppingcart.vue';
// import todo from "./todo.vue"
// import productcategory from './categoryandproduct.vue'
// import stateandcity from './stateandcity';
import productlist from './productlist.vue';
import numbersubmit from './numbersubmit.vue'
import numberdisplay from './numberdisplay.vue'
import crud from './CRUD.vue'

export default {
  name: "App",
  components: {
    // ListComponent
    // shoppingcart
    // todo
    // productcategory
    // stateandcity
    productlist,
    numbersubmit,
    numberdisplay,
    crud

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

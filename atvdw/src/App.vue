<script setup>
import MenuPrincipal from "@/components/MenuPrincipal.vue";
import RodapePrincipal from "@/components/RodapePrincipal.vue";
</script>

<template>
  <MenuPrincipal />
  <main>
    <RouterView />
  </main>
  <RodapePrincipal />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  margin: 0 auto;
  /*padding: 2rem;*/
  height: 100vh;

  font-weight: normal;
}
header {
  background-color: rgb(109, 164, 109);
  color: white;
  height: 5%;
  font-size: 1.3rem;
  display: flex;
}
footer {
  background-color: rgb(109, 164, 109);
  color: rgb(29, 29, 173);
  height: 5%;
  font-size: 1.3rem;
}
main {
  height: 90%;
  background-color: white;
  color: black;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

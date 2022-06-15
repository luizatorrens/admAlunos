<template>
  <header class="menu-direito">
    <span> <RouterLink to="/">Home</RouterLink> </span>
    <span>|</span>
    <span> <RouterLink to="/Alunos">Alunos</RouterLink> </span>
    <span>|</span>
    <span> <RouterLink to="/Turmas">Turmas</RouterLink> </span>
  </header>
</template>
<style>
.menu-direito {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}
</style>

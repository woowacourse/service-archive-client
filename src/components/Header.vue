<template>
  <header class="header">
    <div class="menu" @click="$emit('clickMenu')">
      <img src="../assets/menu-outline.svg" width="32" height="32" />
    </div>
    <div class="service">
      <div class="logo">
        <img src="../assets/logo.svg" width="32" height="32" />
      </div>
      <div class="name">Archive</div>
    </div>
    <div class="rest">
      <input class="search" placeholder="Search..." />
      <button class="submit"></button>
    </div>
  </header>
</template>

<script></script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  background: #111;
  color: #fff;
  box-shadow: 0 5px 10px #222;
  z-index: 99999;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.service {
  display: flex;

  justify-content: center;
  align-items: center;
}

.service > .logo {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
}

.service > .name {
  font-size: 24px;
  font-weight: 600;
}

.rest {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}

.search {
  width: 45vw;
  height: 40px;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: none;
  color: #fff;
  background: #111;
}

.submit {
  width: 40px;
  height: 43px;
  background: url("../assets/search-outline.svg") no-repeat;
  background-size: 80% 80%;
  background-position: 5px 5px;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: none;
}
</style>

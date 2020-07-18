<template>
  <header class="header">
    <div class="menu" @click="$emit('clickMenu')">
      <img src="../assets/menu-outline.svg" width="32" height="32"/>
    </div>
    <div class="service">
      <RouterLink to="/">
        <div class="logo">
          <img src="../assets/logo.svg" width="32" height="32"/>
        </div>
      </RouterLink>
      <RouterLink to="/" class="name">Archive</RouterLink>
    </div>
    <div class="rest">
      <input class="search" placeholder="Search..."/>
      <button class="submit"></button>
    </div>
  </header>
</template>

<script></script>

<style scoped>
  .header {
    display: flex;
    width: 100%;
    height: 50px;
    background: #000;
    color: #fff;
    box-shadow: 0 1px 5px #000;
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

  .service .logo {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
  }

  .service .name {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
  }

  .rest {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10px;
    flex: 1;
  }

  .search {
    width: 45vw;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
    background: #000;
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

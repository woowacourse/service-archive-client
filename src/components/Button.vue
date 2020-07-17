<template>
  <div class="button" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  display: flex;
  width: 120px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 5px;
  border-radius: 8px;
  margin: 10px 0;
  background: #333;
  box-shadow: 0 0 10px #222;
  user-select: none;
  cursor: pointer;
}

.button:hover {
  background: #111;
}
</style>
<template>
  <div class="option-container">
    <div class="option-title">{{ title }}</div>
    <div class="options">
      <div
        class="option"
        :class="{'option-active': option.select}"
        v-for="(option, index) in options"
        :key="index"
        @click="$emit('clickOption', index)"
      >{{ option.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "options"]
};
</script>

<style>
.option-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  flex-direction: column;
}

.option-title {
  display: flex;
  width: 120px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 10px 0;
  user-select: none;
}

.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background: #222;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 5px;
  border-radius: 8px;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;
}

.option-active {
  background: #f1f1f1;
  color: #222;
}
</style>
<template>
  <div class="side-bar" :class="{ 'side-bar-opened': drawer }"></div>
</template>

<script>
export default {
  props: ["drawer"],
};
</script>

<style>
.side-bar {
  position: absolute;
  margin-top: 50px;
  width: 35vmin;
  left: -35vmin;
  height: calc(100% - 50px);
  background: #333;
  transition: all 0.25s;
}

.side-bar-opened {
  left: 0 !important;
}

@media screen and (max-width: 768px) {
  .side-bar {
    margin-top: 0px;
    width: 70vmin;
    left: -70vmin;
    height: 100%;
  }
}
</style>

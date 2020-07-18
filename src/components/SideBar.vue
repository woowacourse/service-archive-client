<template>
  <div class="side-bar" :class="{ 'side-bar-opened': drawer }">
    <slot name="generation"></slot>
    <slot name="level"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["drawer"],
};
</script>

<style>
.side-bar {
  position: absolute;
  left: -35vw;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
  height: calc(100% - 80px);
  background: #333;
  transition: all 0.25s;
  z-index: 99999;
}

.side-bar-opened {
  left: 0 !important;
}

@media screen and (max-width: 768px) {
  .side-bar {
    margin-top: 0;
    width: 70vw;
    left: -70vw;
    height: 100%;
  }
}
</style>

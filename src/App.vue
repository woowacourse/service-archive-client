<template>
  <div class="app">
    <Header @clickMenu="toggleSideBar"/>
    <SideBar :drawer="filter.drawer">
      <OptionContainer
          title="기수"
          :options="filter.generations"
          slot="generation"
          @clickOption="toggleGenerationOption"
      />
      <OptionContainer
          title="레벨"
          :options="filter.levels"
          slot="level"
          @clickOption="toggleLevelOption"
      />
      <Button @click="optionSubmit">적용</Button>
    </SideBar>
    <div class="back" v-if="filter.drawer" @click="toggleSideBar"></div>
    <router-view/>
  </div>
</template>

<script>
  import {mapMutations, mapState} from "vuex";
  import Header from "./components/Header";
  import SideBar from "./components/SideBar";
  import OptionContainer from "./components/OptionContainer";
  import Button from "./components/Button";

  export default {
    name: "App",
    components: {Header, SideBar, OptionContainer, Button},
    methods: {
      ...mapMutations(["toggleSideBar", "toggleGenerationOption", "toggleLevelOption", "optionSubmit"])
    },
    computed: {
      ...mapState(["filter"]),
    }
  };
</script>

<style>
  * {
    margin: 0;
    font-family: "Menlo", sans-serif;
    box-sizing: border-box;
    line-height: 1.5;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
</style>

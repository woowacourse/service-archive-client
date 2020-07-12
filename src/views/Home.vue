<template>
  <v-app class="home">
    <v-navigation-drawer v-model="drawer" app clipped>
      <div class="options-container">
        <v-list dense>
          <v-subheader class="mt-4 white--text"
                       style="display: flex; flex-direction: column;">
            <div class="rounded pa-2 pl-8 pr-8" style="border: 1px solid white">
              기수
            </div>
          </v-subheader>
          <v-card-text>
            <v-row align="center" justify="center">
              <div style="display: flex;flex-direction: column">
                <button v-for="(generation, i) in generations" :key="i"
                        @click="generation.select=!generation.select"
                        :class="{ active: generation.select, blur: !generation.select}"
                        class="menu-item">
                  {{generation.text}}
                </button>
              </div>
            </v-row>
          </v-card-text>
          <v-subheader class="mt-4 white--text" style="display: flex; flex-direction: column;">
            <div class="rounded pa-2 pl-8 pr-8" style="border: 1px solid white">
              레벨
            </div>
          </v-subheader>

          <v-card-text>
            <v-row align="center" justify="center">
              <div style="display: flex;flex-direction: column">
                <button v-for="(level, i) in levels" :key="i" @click="level.select=!level.select"
                        :class="{ active: level.select, blur: !level.select }" class="menu-item">
                  {{level.text}}
                </button>
              </div>
            </v-row>
          </v-card-text>
        </v-list>
      </div>
      <div class="apply-container">
        <div class="apply-btn" @click="applyOptions">적용</div>
      </div>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="black" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../assets/logo.svg" width="32" height="32" alt="logo">
      <v-toolbar-title class="ml-2 mr-2 align-center">
        <span class="title">Archive</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 200px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <ConversationList :conversations="conversations"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import ConversationList from "../components/ConversationList";

  export default {
    components: { ConversationList },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      generations: [
        {
          select: false,
          text: "1기",
        },
        {
          select: false,
          text: "2기",
        },
      ],
      levels: [
        {
          select: false,
          text: "1",
        },
        {
          select: false,
          text: "2",
        },
        {
          select: false,
          text: "3",
        },
        {
          select: false,
          text: "4",
        }
      ]
    }),
    computed: mapState(['conversations']),
    created() {
      this.$vuetify.theme.dark = true
    },
    mounted() {
      this.loadConversations()
    },
    methods: {
      ...mapActions(['loadConversations']),
      applyOptions() {
        this.drawer = false;
      }
    }
  }
</script>

<style scoped>
  .active {
    background: #f1f1f1;
    color: black;
  }

  .blur {
    background: #252525;
    color: #f1f1f1;
  }

  .menu-item {;
    border-radius: 8px;
    box-shadow: 0 0 10px #222;
    outline: none;
    margin: 8px;
    padding: 5px 60px;
  }

  .options-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .apply-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
  }

  .apply-btn {
    user-select: none;
    cursor: pointer;
    background: #333;
    box-shadow: 0 0 10px #222;
    color: #f1f1f1;
    padding: 3px 30px;
    border-radius: 8px;
  }

  .apply-btn:hover {
    background: #777;
  }
</style>

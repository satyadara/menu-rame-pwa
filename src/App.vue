<template>
  <v-app id="inspire">
    <!--<v-navigation-drawer-->
      <!--v-model="drawer"-->
      <!--fixed-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list dense>-->
        <!--<v-list-tile @click="">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>home</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>Order kuy</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-toolbar color="indigo" dark fixed app>
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>Menu Rame</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!--<v-footer color="indigo" app>-->
      <!--<span class="white&#45;&#45;text">satyadara &copy; 2018</span>-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

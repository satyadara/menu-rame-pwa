<template>
  <v-layout wrap>
    <v-flex xs12 v-for="item in menuList" v-if="menuList.length > 0">
      <v-card >
        <v-container
          fluid
          grid-list-md
        >
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ '[ ' + item.count + ' ] ' + item.name }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab small dark color="pink darken-2" @click="removeMenu(item)">
              <v-icon dark>delete</v-icon>
            </v-btn>
            <v-btn fab small dark color="red accent-3" @click="decreaseMenuCount(item)">
              <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn fab small dark color="green darken-2" @click="increaseMenuCount(item)">
              <v-icon dark>add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
      <br/>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout>
            <v-flex xs8>
              <v-text-field
                v-model="newMenu"
                label="Add new menu"
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-btn color="success" @click="addMenu()">Add</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "MenuList",
    data: () => ({
      menuList: [],
      newMenu: ""
    }),
    methods: {
      addMenu() {
        if (this.menuList.length >= 0) {
          this.menuList.push(Object.assign({}, {"name": this.newMenu, "count": 0}))
          this.newMenu = ""
        }
      },
      removeMenu(item) {
        const index = this.menuList.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.menuList.splice(index, 1)
      },
      increaseMenuCount(item) {
        if (item.count >= 0) {
          const index = this.menuList.indexOf(item)
          Object.assign(this.menuList[index], {"name": item.name, "count": item.count + 1})
        }
      },
      decreaseMenuCount(item) {
        if (item.count > 0) {
          const index = this.menuList.indexOf(item)
          Object.assign(this.menuList[index], {"name": item.name, "count": item.count - 1})
        }
      }
    }
  }
</script>

<style scoped>

</style>

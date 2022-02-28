<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on" icon>
          <v-icon dark> mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="item.click()">
          <v-icon left>{{ item.icone }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar />
  </div>
</template>

<script>
import ModalEditar from '../Modal/ModalEditar.vue';
export default {
  components: { ModalEditar },
  data: () => ({
    items: [
      {
        icone: "mdi-pencil",
        title: "Editar",
        click() {
          console.log("Editar");
        },
      },
      {
        icone: "mdi-trash-can",
        title: "Excluir",
        click() {
          console.log("Excluir");
        },
      },
    ],
  }),
};
</script>

<style></style>

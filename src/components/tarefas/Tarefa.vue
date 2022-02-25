<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefa.concluído }"
      @click="tarefa.concluído = !tarefa.concluído"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluído"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluído }"
            >{{ tarefa.título }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  methods:{
    handleRemoveTarefa(id) {
      this.$store.commit('removeTarefa', id)
    }
  }
};
</script>

<style></style>

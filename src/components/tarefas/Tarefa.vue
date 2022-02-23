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
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
};
</script>

<style></style>

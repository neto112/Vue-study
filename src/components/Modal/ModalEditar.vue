<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo título.</v-card-text>
        <v-text-field
          class="px-3"
          label="Título"
          placeholder="Informe um título"
          outlined
          v-model="título"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="primary" text @click="handleEditar()"> Editar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  data() {
    return {
      dialog: true,
      título: null,
    };
  },
  created() {
    this.título = this.tarefa.título;
  },
  methods: {
    handleEditar() {
      let novaTarefa = {
        título: this.título,
        id: this.tarefa.id,
      };
      this.$store.dispatch("editaTarefa", novaTarefa);
      this.$emit("fechaModal");
    },
  },
};
</script>

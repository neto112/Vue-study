<template>
  <v-col cols="12">
    <v-text-field
      v-model="campoInput"
      label="Qual sua tarefa?"
      outlined
      clearable
      @keyup.enter="handleAddTarefa"
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      // this.$store.commit("adicionaTarefa", this.campoInput);
      this.$store.dispatch("adicionaTarefa", this.campoInput);
      this.campoInput = null;
    },
  },
};
</script>

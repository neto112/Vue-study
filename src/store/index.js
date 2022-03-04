import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";
let db = new Localbase("db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [
      // {id:1, título: "Ir ao mercado", concluído: false },
      // {id:2, título: "Comprar ração", concluído: false },
    ],
  },
  mutations: {
    buscaTarefas(state) {
      db.collection("tarefas")
        .get()
        .then((tarefasDB) => {
          state.tarefas = tarefasDB;
        });
    },
    adicionaTarefa(state, título) {
      db.collection("tarefas").add({
        id: new Date().getTime(),
        título,
        concluído: false,
      });
    },
  },
  actions: {
    async adicionaTarefa({ commit }, título) {
      await commit("adicionaTarefa", título);
      await commit("buscaTarefas");
    },
    editaTarefa({ commit }, novaTarefa) {
      db.collection("tarefas")
        .doc({ id: novaTarefa.id })
        .update({
          título: novaTarefa.título,
        })
        .then(() => {
          commit("buscaTarefas");
        });
    },
    removeTarefa({ commit }, id) {
      db.collection("tarefas")
        .doc({ id })
        .delete()
        .then(() => {
          commit("buscaTarefas");
        });
    },
  },
  modules: {},
});

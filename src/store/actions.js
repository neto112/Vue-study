import db from "../services/localbase.js";

export default {
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
  concluiTarefa({ commit }, novaTarefa) {
    db.collection("tarefas")
      .doc({ id: novaTarefa.id })
      .update({
        concluído: novaTarefa.concluído,
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
};

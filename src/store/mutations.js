import db from "../services/localbase";

export default {
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
    }
  }
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id:1, título: "Ir ao mercado", concluído: false },
      {id:2, título: "Comprar ração", concluído: false },      
    ],
  },
  mutations: {
    adicionaTarefa(state, título){
      if (título) {
        state.tarefas.push({
          id: new Date().getTime(),
          título, 
          concluído: false,
        });
        this.campoInput = null;
      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})

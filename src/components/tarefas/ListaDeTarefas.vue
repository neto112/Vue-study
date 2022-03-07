<template>
  <div>
    <drop-list
      :items="tarefasComputadas"
      @reorder="$event.apply(tarefasComputadas)"
    >
      <template v-slot:item="{ item, reorder }">
        <drag :key="item.id" :data="item">
          <tarefa
            :tarefa="item"
            style="background-color: white"
            :style="
              reorder
                ? {
                    borderLeft: '2px solid #1976D2',
                    marginLeft: '-2px',
                  }
                : {}
            "
          />
          <v-divider />
        </drag>
      </template>
      <template v-slot:inserting-drag-image="{ data }">
        <v-list-item-avatar style="transform: translate(-50%, -50%) scale(1.5)">
          <img :src="data.avatar" />
        </v-list-item-avatar>
      </template>
      <template v-slot:reordering-drag-image />
      <template v-slot:feedback="{ data }">
        <v-skeleton-loader
          type="list-item-avatar-three-line"
          :key="data.title"
          style="border-left: 2px solid #1976d2; margin-left: -2px"
        />
      </template>
    </drop-list>
  </div>
</template>

<script>
import { Drag, Drop, DropList } from "vue-easy-dnd";
import Tarefa from "./Tarefa.vue";
export default {
  components: {
    Drag,
    DropList,
    Drop,
    Tarefa,
  },
  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    },
  },
};
</script>

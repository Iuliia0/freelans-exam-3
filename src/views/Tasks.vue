<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>

  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="task in tasks">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'{{ task.status }}'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
            <!-- {{ new Date().toLocaleDateString() }} -->
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import { inject, reactive, provide, ref } from "vue";
import { useStore } from "vuex";
import AppStatus from "../components/AppStatus";

export default {
  setup() {
    const store = useStore()
    // const tasks = reactive({
    //   name: 'Name',
    //   date: '',
    //   description: '',
    // })
    // provide('tasks', tasks)

    return {
      tasks: store.state.tasks
    }

  },
  components: { AppStatus },
};
</script>

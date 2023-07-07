<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form class="card" @submit.prevent="create">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <!-- <input type="text" id="title"/> -->
      <input type="text" id="title" v-model="title"/>
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <!-- <input type="date" id="date"/> -->
      <input type="date" id="date" v-model="date"/>
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <!-- <textarea id="description"></textarea> -->
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>

<script>
import { ref, inject, reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["create-now"],
  setup(props, context) {
    const store = useStore()

    const newTasks = reactive({
      title: '',
      date: '',
      description: '',
      status: 'active'
    })

    function create(event) {
      store.commit({
        type: 'pushTask',
        value: newTasks
      })

      for (let item in newTasks) {
        if (item !== 'status') newTasks[item] = ''
      }
    }

    return {
      ...toRefs(newTasks),
      create,
    };
  },
};
</script>

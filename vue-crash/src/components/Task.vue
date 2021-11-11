<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <div class="content">
      <h3>{{ task.text }}</h3>
      <h4>{{ task.day }}</h4>
    </div>
    <i class="fas fa-times" @click="onDelete(task.id)"></i>
    <input
      type="checkbox"
      id="checkbox"
      v-model="task.reminder"
      @change="handleReminder(task.id)"
    />
  </div>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },

  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    async handleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updTask),
      });
    },
  },
};
</script>
<style>
.fas {
  color: red;
  margin-right: 10px;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content {
  flex: 1;
}
</style>

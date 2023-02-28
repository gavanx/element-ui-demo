<template>
  <div class="about">
    <h1>This is an SelectLimitDemo page</h1>
    <select-limit v-model="selectedItem" placeholder="请选择LIMIT" :options="options">
    </select-limit>
  </div>
</template>

<script>
import SelectLimit from "./select-limit.vue";
export default {
  components: {
    SelectLimit,
  },
  data() {
    const options = [];
    for (let i = 0; i < 100; i++) {
      options.push({
        value: "value " + i,
        label: "label " + i,
      });
    }
    return {
      options,
      selectedItem: "",
    };
  },
  watch: {
    selectedItem(value) {
      console.log("selectedItem", value);
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

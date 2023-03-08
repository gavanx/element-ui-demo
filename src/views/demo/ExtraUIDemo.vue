<template>
  <div class="about">
    <h1>This is an ExtraUIDemo page</h1>
    <ex-select-limit
      v-model="selectedItem"
      placeholder="请选择LIMIT"
      :options="options"
      :limit="10000000"
    >
    </ex-select-limit>
  </div>
</template>

<script>
export default {
  data() {
    const options = [];
    for (let i = 0; i < 10000; i++) {
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
  methods: {
    filterItemDemox(item, query) {
      console.log("filterItemDemo ", item, query);
      return true;
    },
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

<template>
  <div class="about">
    <h1>This is an SelectLimitDemo page</h1>
    <el-select-limit
      v-model="selectedItem"
      placeholder="请选择LIMIT"
      :options="options"
      :limit="10000000"
    >
    </el-select-limit>
    <el-select-limit-v2
      v-model="selectedItem"
      placeholder="222请选择LIMIT"
      :options="options"
      :limit="10000000"
    >
    </el-select-limit-v2>
  </div>
</template>

<script>
import ElSelectLimit from "./select-limit.vue";
import ElSelectLimitV2 from "./select-limit-v2.js";
export default {
  components: {
    ElSelectLimit,
    ElSelectLimitV2,
  },
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
